const $ = selector => document.querySelector(selector);
const initial = new URL(location.href).searchParams;
const storage = {
  get(key) { try { return localStorage.getItem(key); } catch { return null; } },
  set(key, value) { try { localStorage.setItem(key, value); } catch { /* Preferences remain usable without storage. */ } }
};
let language = ['zh', 'en'].includes(initial.get('lang')) ? initial.get('lang') : storage.get('embodied-language') === 'en' ? 'en' : 'zh';
const messages = {
  zh: {skip:'跳转到论文',daily:'每日论文',popular:'热门论文',navigation:'主导航',theme:'背景颜色',light:'白色背景',dark:'黑色背景',list:'论文列表',loading:'正在加载论文…',loadError:'暂时无法加载论文，请稍后刷新。',invalidData:'论文数据暂时不可用。',empty:'这个时间范围内暂时没有已发布的论文解读。',preparing:'首期论文解读正在准备，完成后会在这里更新。',chooseWeek:'选择星期',previousWeek:'上一周',nextWeek:'下一周',papers:n=>`${n} 篇论文`,period:n=>`近 ${n} 天`,popularTitle:n=>`近 ${n} 天热门`,show:'展开总结',hide:'收起总结',noCode:'暂无公开代码',ranking:'按 Hugging Face 当前累计点赞数排序，每个时间范围最多显示 12 篇。',votes:n=>`${n} 个 HF 点赞`,missing:'暂未找到这篇论文',opening:'正在打开 PDF…'},
  en: {skip:'Skip to papers',daily:'Daily papers',popular:'Popular papers',navigation:'Main navigation',theme:'Background color',light:'White background',dark:'Black background',list:'Paper list',loading:'Loading papers…',loadError:'Unable to load papers. Please refresh and try again.',invalidData:'Paper data is temporarily unavailable.',empty:'No published paper readings in this period.',preparing:'The first paper readings are being prepared.',chooseWeek:'Choose a week',previousWeek:'Previous week',nextWeek:'Next week',papers:n=>`${n} ${n===1?'paper':'papers'}`,period:n=>`Last ${n} days`,popularTitle:n=>`Popular · last ${n} days`,show:'Show summary',hide:'Hide summary',noCode:'No public code available',ranking:'Ranked by current cumulative Hugging Face upvotes. Up to 12 papers per period.',votes:n=>`${n} HF upvotes`,missing:'Paper not found',opening:'Opening PDF…'}
};
const t = (key, value) => typeof messages[language][key] === 'function' ? messages[language][key](value) : messages[language][key];
Object.assign(messages.zh, {showAll:'展开全部总结',hideAll:'收起全部总结'});
Object.assign(messages.en, {showAll:'Expand all summaries',hideAll:'Collapse all summaries'});
Object.assign(messages.zh, {slides:'ppt',githubStar:'在 GitHub 上 Star 本项目'});
Object.assign(messages.en, {slides:'Slides',githubStar:'Star this project on GitHub'});
Object.assign(messages.zh, {search:'检索论文',searchLabel:'按标题、总结或 arXiv 编号检索论文',searchPlaceholder:'检索全部论文：标题、总结或 arXiv 编号',searchPopularPlaceholder:'筛选当前时段：标题、总结或 arXiv 编号',clearSearch:'清空搜索',searchResults:'搜索结果 · 全部日期',noResults:'没有找到匹配的论文，试试其他关键词。'});
Object.assign(messages.en, {search:'Search papers',searchLabel:'Search papers by title, summary, or arXiv ID',searchPlaceholder:'Search all papers: title, summary, or arXiv ID',searchPopularPlaceholder:'Filter this period: title, summary, or arXiv ID',clearSearch:'Clear search',searchResults:'Search results · all dates',noResults:'No matching papers. Try another keyword.'});
const make = (tag, text, className) => {
  const element = document.createElement(tag);
  if (text !== undefined) element.textContent = text;
  if (className) element.className = className;
  return element;
};
const safeExternal = value => { try {const url = new URL(value);return url.protocol === 'https:' ? url.href : null;} catch {return null;} };
const complete = paper => paper.summary && (paper.slides?.length || paper.slide_count>0) && paper.downloads?.pptx && paper.downloads?.pdf;
const validDay = value => typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(`${value}T12:00:00Z`)) && new Date(`${value}T12:00:00Z`).toISOString().slice(0,10) === value;
const addDays = (day, count) => {const date = new Date(`${day}T12:00:00Z`);date.setUTCDate(date.getUTCDate()+count);return date.toISOString().slice(0,10);};
const weekStart = day => addDays(day, -(new Date(`${day}T12:00:00Z`).getUTCDay()+6)%7);
function dateLabel(day, year=false) {
  return new Intl.DateTimeFormat(language==='zh'?'zh-CN':'en-US', {month:language==='zh'?'long':'short',day:'numeric',...(year?{year:'numeric'}:{}),timeZone:'UTC'}).format(new Date(`${day}T12:00:00Z`));
}
function rangeLabel(start) {const end=addDays(start,6);const year=start.slice(0,4)!==end.slice(0,4);return `${dateLabel(start,year)} ~ ${dateLabel(end,year)}`;}
function anchor(text, href, className) {const a=make('a',text,className);a.href=href;a.target='_blank';a.rel='noopener noreferrer';return a;}
function pdfURL(paper) {
  // Both the main site and the monthly archive serve PDFs inline via Pages.
  if (!/^\d{4}\.\d{4,5}(?:v\d+)?$/.test(paper.id)) throw Error(t('invalidData'));
  if(language==='en' && !paper.pdf_url_en) return null;
  const filename=`${paper.id}_slides${language==='en'?'.en':''}.pdf`;
  const legacyFilename=`${paper.id}${language==='en'?'.en':''}.pdf`;
  const value=(language==='en'?paper.pdf_url_en:paper.pdf_url)||`pdfs/${filename}`;
  const url=new URL(value,location.href);
  const knownFilename=[filename,legacyFilename].some(name=>url.pathname.endsWith(`/pdfs/${name}`));
  const local=url.origin===location.origin && knownFilename;
  const archive=url.protocol==='https:' && /^[a-z0-9-]+\.github\.io$/.test(url.hostname) && knownFilename;
  if((!local && !archive) || url.username || url.password) throw Error(t('invalidData'));
  return url.href;
}
function setTheme(theme) {
  document.documentElement.dataset.theme=theme;
  storage.set('embodied-theme',theme);
  $('#theme-light')?.setAttribute('aria-pressed',String(theme==='light'));
  $('#theme-dark')?.setAttribute('aria-pressed',String(theme==='dark'));
  $('meta[name="theme-color"]')?.setAttribute('content',theme==='dark'?'#000000':'#ffffff');
}
function applyLanguage() {
  document.documentElement.lang=language==='zh'?'zh-CN':'en';
  document.querySelectorAll('[data-i18n]').forEach(element=>element.textContent=t(element.dataset.i18n));
  for (const [id,key] of [['navigation','navigation'],['theme-switch','theme'],['theme-light','light'],['theme-dark','dark'],['paper-list','list'],['github-star','githubStar'],['paper-search','search'],['search-input','searchLabel'],['search-clear','clearSearch']]) $(`#${id}`)?.setAttribute('aria-label',t(key));
  $('#github-star')?.setAttribute('title',t('githubStar'));
  $('#search-input')?.setAttribute('placeholder',t(initial.get('view')==='popular'?'searchPopularPlaceholder':'searchPlaceholder'));
  $('#search-clear')?.setAttribute('title',t('clearSearch'));
  const toggle=$('#language-toggle');
  if(toggle) {toggle.textContent=language==='zh'?'EN':'中文';toggle.lang=language==='zh'?'en':'zh-CN';toggle.setAttribute('aria-label',language==='zh'?'Switch to English':'切换为中文');}
  const daily=new URL('./',location.href);daily.searchParams.set('lang',language);
  if(searchQuery.trim()) daily.searchParams.set('q',searchQuery);
  $('#nav-daily')?.setAttribute('href',daily.href);
  const popular=new URL(daily);popular.searchParams.set('view','popular');
  $('#nav-popular')?.setAttribute('href',popular.href);
}
let catalog=null;
let selectedWeek=null;
let days=initial.get('days')==='30'?30:7;
let searchQuery=initial.get('q')||'';
const opened=new Set();
function searchTerms(value) {return value.normalize('NFKC').toLowerCase().trim().split(/\s+/).filter(Boolean);}
function searchPattern(term) {
  const escaped=term.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  const latin=/\p{Script=Latin}/u.test(term);
  // Chinese text and punctuation may border an English word, but Latin letters and digits may not.
  const wordCharacter=/[\p{Script=Latin}\p{Number}_]/u;
  const boundary='[^\\p{Script=Latin}\\p{Number}_]';
  const before=latin && wordCharacter.test(term[0])?`(?:^|${boundary})`:'';
  const after=latin && wordCharacter.test(term.at(-1))?`(?=$|${boundary})`:'';
  return new RegExp(`${before}(${escaped})${after}`,'gu');
}
function matchesSearch(paper,terms) {
  const summary=language==='en'?paper.summary_en:paper.summary;
  const text=[paper.id,paper.title,summary].filter(Boolean).join(' ').normalize('NFKC').toLowerCase();
  return terms.every(term=>searchPattern(term).test(text));
}
function highlightSearch(element,value,terms) {
  const text=String(value||'');element.textContent=text;
  if(!text || !terms.length) return;
  const normalized=text.normalize('NFKC').toLowerCase();
  const ranges=[];
  for(const term of terms) for(const match of normalized.matchAll(searchPattern(term))) {
    const end=match.index+match[0].length;ranges.push([end-match[1].length,end]);
  }
  if(!ranges.length) return;
  // Map normalized matches back to the original spelling, including full-width letters and ligatures.
  const starts=[],ends=[];
  for(const {segment,index} of new Intl.Segmenter(undefined,{granularity:'grapheme'}).segment(text)) {
    const length=segment.normalize('NFKC').toLowerCase().length;
    for(let offset=0;offset<length;offset++) {starts.push(index);ends.push(index+segment.length);}
  }
  const merged=[];
  for(const [start,end] of ranges.map(([start,end])=>[starts[start],ends[end-1]]).sort((a,b)=>a[0]-b[0]||b[1]-a[1])) {
    const previous=merged.at(-1);
    if(previous && start<=previous[1]) previous[1]=Math.max(previous[1],end);
    else merged.push([start,end]);
  }
  element.replaceChildren();let cursor=0;
  for(const [start,end] of merged) {
    if(start>cursor) element.append(document.createTextNode(text.slice(cursor,start)));
    element.append(make('mark',text.slice(start,end),'search-highlight'));cursor=end;
  }
  if(cursor<text.length) element.append(document.createTextNode(text.slice(cursor)));
}
function syncSummaries() {
  const cards=[...document.querySelectorAll('.paper-card')];
  for(const card of cards) {
    const expanded=opened.has(card.dataset.id);
    const button=card.querySelector('.summary-toggle');
    card.querySelector('.paper-summary').hidden=!expanded;
    button.setAttribute('aria-expanded',String(expanded));
    button.setAttribute('aria-label',`${t(expanded?'hide':'show')}: ${card.querySelector('h3').textContent}`);
  }
  const button=$('#toggle-all-summaries');
  if(button) {
    const expanded=cards.length>0 && cards.every(card=>opened.has(card.dataset.id));
    button.disabled=cards.length===0;
    button.setAttribute('aria-pressed',String(expanded));
    button.setAttribute('aria-label',t(expanded?'hideAll':'showAll'));
    button.title=t(expanded?'hideAll':'showAll');
  }
}
function updateURL(key,value) {const url=new URL(location.href);value?url.searchParams.set(key,value):url.searchParams.delete(key);url.searchParams.delete('date');history.replaceState(null,'',url);}
function paperCard(paper,popular=false) {
  const terms=searchTerms(searchQuery);
  const card=make('article',undefined,'paper-card');card.dataset.id=paper.id;
  const row=make('div',undefined,'paper-row');
  const title=make('div',undefined,'paper-title');
  const actions=make('div',undefined,'paper-actions');
  const pdf=pdfURL(paper);
  if(pdf) actions.append(anchor(t('slides'),pdf));
  else {const unavailable=make('span',t('slides'),'unavailable');unavailable.setAttribute('aria-disabled','true');unavailable.title='English slides are being prepared.';actions.append(unavailable);}
  actions.append(anchor('arXiv',safeExternal(paper.arxiv_url)||`https://arxiv.org/abs/${paper.id}`));
  const code=safeExternal(paper.code_url);
  if(code && new URL(code).hostname==='github.com') actions.append(anchor('Code',code));
  else {const unavailable=make('span','Code','unavailable');unavailable.setAttribute('aria-disabled','true');unavailable.title=t('noCode');actions.append(unavailable);}
  actions.append(anchor('HF',safeExternal(paper.hf_url)||`https://huggingface.co/papers/${paper.id}`));
  const toggle=make('button',undefined,'summary-toggle');toggle.type='button';
  toggle.innerHTML='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m4 6 4 4 4-4"/></svg>';
  const summary=make('p',language==='en'?paper.summary_en:paper.summary,'paper-summary');
  highlightSearch(summary,summary.textContent,terms);
  // Never replace a missing translation with Chinese in English mode.
  if(language==='en' && !summary.textContent) summary.textContent='Summary translation is being prepared.';
  summary.id=`summary-${paper.id}-${$('#papers').querySelectorAll('.paper-card').length}`;
  toggle.setAttribute('aria-controls',summary.id);
  function sync() {const expanded=opened.has(paper.id);summary.hidden=!expanded;toggle.setAttribute('aria-expanded',String(expanded));toggle.setAttribute('aria-label',`${t(expanded?'hide':'show')}: ${paper.title}`);}
  toggle.onclick=()=>{opened.has(paper.id)?opened.delete(paper.id):opened.add(paper.id);syncSummaries();};sync();
  const heading=make('h3');highlightSearch(heading,paper.title,terms);
  title.append(heading);actions.append(toggle);row.append(title,actions);
  if(popular) {const likes=make('span',`↑ ${paper.likes??0}`,'paper-likes');likes.setAttribute('aria-label',t('votes',paper.likes??0));row.append(likes);}
  card.append(row,summary);return card;
}
function renderSearch(terms) {
  $('#edition-title').textContent=t('searchResults');$('#controls').replaceChildren();$('#controls').hidden=true;
  $('#papers').replaceChildren();$('#ranking-note').hidden=true;
  const papers=catalog.papers.filter(p=>matchesSearch(p,terms));
  $('#paper-count').textContent=t('papers',papers.length);$('#status').textContent=papers.length?'':t('noResults');
  const groups=new Map();
  for(const paper of papers) {
    const day=paper.hf_dates.filter(validDay).sort().at(-1)||'';
    if(!groups.has(day)) groups.set(day,[]);
    groups.get(day).push(paper);
  }
  for(const day of [...groups.keys()].sort().reverse()) {
    const section=make('section',undefined,'day-group');
    if(day) section.append(make('h2',dateLabel(day,true),'day-heading'));
    $('#papers').append(section);groups.get(day).forEach(p=>section.append(paperCard(p)));
  }
  syncSummaries();
}
function renderWeekly() {
  const papers=catalog.papers;
  const dates=[...new Set(papers.flatMap(p=>p.hf_dates).filter(validDay))].sort();
  const latest=dates.at(-1);
  const newest=latest?weekStart(latest):null;
  const oldest=dates.length?weekStart(dates[0]):null;
  if(!selectedWeek) {const requested=initial.get('week')||initial.get('date');selectedWeek=validDay(requested)?weekStart(requested):newest;}
  const terms=searchTerms(searchQuery);
  if(terms.length) {renderSearch(terms);return;}
  $('#edition-title').textContent=selectedWeek?rangeLabel(selectedWeek):'';
  $('#controls').replaceChildren();$('#controls').hidden=false;$('#papers').replaceChildren();$('#ranking-note').hidden=true;
  if(!newest) {$('#paper-count').textContent=t('papers',0);$('#status').textContent=t('preparing');syncSummaries();return;}
  const previous=make('button','‹','week-arrow');previous.id='previous-week';previous.type='button';previous.setAttribute('aria-label',t('previousWeek'));previous.disabled=selectedWeek<=oldest;
  const next=make('button','›','week-arrow');next.id='next-week';next.type='button';next.setAttribute('aria-label',t('nextWeek'));next.disabled=selectedWeek>=newest;
  const select=make('select');select.id='week-select';select.setAttribute('aria-label',t('chooseWeek'));
  const weeks=[];
  for(let current=newest;current>=oldest;current=addDays(current,-7)) weeks.push(current);
  if(!weeks.includes(selectedWeek)) weeks.push(selectedWeek);
  weeks.sort().reverse().forEach(week=>{const option=make('option',rangeLabel(week));option.value=week;select.append(option);});select.value=selectedWeek;
  function change(week) {selectedWeek=week;updateURL('week',week);renderWeekly();}
  previous.onclick=()=>change(addDays(selectedWeek,-7));next.onclick=()=>change(addDays(selectedWeek,7));select.onchange=()=>change(select.value);
  $('#controls').append(previous,select,next);
  const end=addDays(selectedWeek,6);
  const included=papers.filter(p=>p.hf_dates.some(day=>day>=selectedWeek && day<=end));
  $('#paper-count').textContent=t('papers',included.length);$('#status').textContent=included.length?'':t('empty');
  const groupedDays=[...new Set(included.flatMap(p=>p.hf_dates).filter(day=>day>=selectedWeek && day<=end))].sort().reverse();
  for(const day of groupedDays) {
    const section=make('section',undefined,'day-group');const heading=make('h2',dateLabel(day),'day-heading');section.append(heading);$('#papers').append(section);
    included.filter(p=>p.hf_dates.includes(day)).forEach(p=>section.append(paperCard(p)));
  }
  syncSummaries();
}
function renderPopular() {
  $('#edition-title').textContent=t('popularTitle',days);$('#controls').replaceChildren();$('#controls').hidden=false;$('#papers').replaceChildren();
  for(const value of [7,30]) {const button=make('button',t('period',value),'period-button');button.type='button';button.setAttribute('aria-pressed',String(days===value));button.onclick=()=>{days=value;updateURL('days',String(value));renderPopular();};$('#controls').append(button);}
  const today=new Intl.DateTimeFormat('sv-SE',{timeZone:catalog.timezone||'Asia/Shanghai'}).format(new Date());
  const minimum=addDays(today,-days+1);
  const terms=searchTerms(searchQuery);
  const papers=catalog.papers.filter(p=>p.hf_dates.some(day=>day>=minimum && day<=today) && matchesSearch(p,terms)).sort((a,b)=>(b.likes||0)-(a.likes||0)||a.id.localeCompare(b.id)).slice(0,12);
  papers.forEach(p=>$('#papers').append(paperCard(p,true)));
  $('#paper-count').textContent=t('papers',papers.length);$('#status').textContent=papers.length?'':t(terms.length?'noResults':'empty');
  $('#ranking-note').hidden=false;$('#ranking-note').textContent=t('ranking');
  syncSummaries();
}
function render() {
  applyLanguage();
  const popular=initial.get('view')==='popular';
  $(popular?'#nav-popular':'#nav-daily').setAttribute('aria-current','page');
  document.title=popular?`${t('popular')} · Embodied AI Daily Papers`:'Embodied AI Daily Papers';
  if(catalog) popular?renderPopular():renderWeekly();
}
if(document.body.dataset.page!=='reader') {
  const search=$('#search-input');const clear=$('#search-clear');
  search.value=searchQuery;clear.hidden=!searchQuery;
  function updateSearch() {
    searchQuery=search.value;clear.hidden=!searchQuery;updateURL('q',searchQuery.trim());render();
  }
  search.oninput=event=>{if(!event.isComposing) updateSearch();};
  search.oncompositionend=updateSearch;
  clear.onclick=()=>{search.value='';updateSearch();search.focus();};
  search.onkeydown=event=>{if(event.key==='Escape' && !event.isComposing) {event.preventDefault();clear.onclick();}};
  $('#theme-light').onclick=()=>setTheme('light');$('#theme-dark').onclick=()=>setTheme('dark');
  setTheme(document.documentElement.dataset.theme==='dark'?'dark':'light');
  $('#language-toggle').onclick=()=>{language=language==='zh'?'en':'zh';storage.set('embodied-language',language);updateURL('lang',language);render();};
  $('#toggle-all-summaries').onclick=()=>{
    const expanded=$('#toggle-all-summaries').getAttribute('aria-pressed')==='true';
    opened.clear();
    if(!expanded && catalog) catalog.papers.forEach(paper=>opened.add(paper.id));
    syncSummaries();
  };
  render();$('#status').textContent=t('loading');
}
try {
  const response=await fetch('./data/catalog.json');if(!response.ok) throw Error(t('loadError'));
  catalog=await response.json();if(catalog.version!==1 || !Array.isArray(catalog.papers)) throw Error(t('invalidData'));
  catalog.papers=catalog.papers.filter(complete);
  if(document.body.dataset.page==='reader') {
    document.documentElement.lang=language==='zh'?'zh-CN':'en';
    const paper=catalog.papers.find(p=>p.id===initial.get('id'));
    if(!paper) throw Error(t('missing'));
    const pdf=pdfURL(paper);
    if(pdf) {$('#status').textContent=t('opening');location.replace(pdf);}
    else $('#status').textContent='English slides are being prepared.';
  } else render();
} catch(error) {$('#status').textContent=error.message;}
