# Embodied AI Daily Papers

Website: [Embodied AI Daily Papers](https://ipplab.github.io/embodied-ai-daily-papers/)

Daily embodied AI papers from Hugging Face, with paper summaries and reading slides.

- **Daily papers:** Browse weekly on the website or by month below; expand a summary to read more.
- **Popular papers:** Papers featured in the last 7 or 30 days, ranked by cumulative Hugging Face upvotes, with up to 12 papers per period.
- **Paper links:** English and Chinese slides, the arXiv paper, author code when available, and the Hugging Face discussion.

## Daily Papers — November 2026


Dates refer to the first Hugging Face daily listing. Each paper appears once in the monthly archive.


### November 12, 2026

**GTAGym: Real AAA Game Tasks Environment for Evaluation and Reinforcement Learning**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.13028_slides.en.pdf?v=ffd4410668c53562>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.13028_slides.pdf?v=993a02eadedcff6e>) · [arXiv](<https://arxiv.org/abs/2611.13028>) · [Code](<https://github.com/ljbro/GTAGym>) · [HF](<https://huggingface.co/papers/2611.13028>)

<details>
<summary>Summary</summary>

GTAGym splits the GTA V main-story missions into 150 automatically scorable tasks and provides an RL environment generator. The strongest VLM agent reaches only 70.9% (humans reach 89.8%). Its weak points are closed-loop control tasks such as flying and interception. Small-scale LoRA-GRPO training already brings improvements.

</details>

**Interactive Visual Gym: Evaluating Visual Interaction Models with Simulated Users in Interactive Worlds**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.08286_slides.en.pdf?v=d8650894882583dd>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.08286_slides.pdf?v=854ada7c5e4fdbc3>) · [arXiv](<https://arxiv.org/abs/2611.08286>) · [Code](<https://github.com/SalesforceAIResearch/Interactive-Visual-Gym>) · [HF](<https://huggingface.co/papers/2611.08286>)

<details>
<summary>Summary</summary>

The authors move the evaluation of visual assistants, meaning AIs that watch a person perform a task and give advice as they watch, from "replaying recordings and comparing against reference answers" to closed-loop evaluation in executable simulated environments. The environments contain VLM-simulated users that make mistakes and have personalities, and they cover three scenarios: cooking, household chores, and phone settings. On IVG-Bench, the resulting set of 315 scenarios, even the strongest model, Gemini 4 Argon, completes only 53.4% of tasks on time on average. Once real inference latency is taken into account, its reminders often arrive after the user has already made the mistake, and the rankings change accordingly. The environments can also provide useful rewards for RL: with only 12 steps of GRPO, Qwen3.5-4B improves its task success rate by 3–9 percentage points.

</details>

### November 11, 2026

**Is Your Robot's Memory Just a Clock? Temporal Shortcuts in Memory-Augmented VLA Policies**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.14488_slides.en.pdf?v=54cb840966484693>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.14488_slides.pdf?v=0cf9d7924d766eb8>) · [arXiv](<https://arxiv.org/abs/2611.14488>) · [Code](<https://github.com/bennidict23/memory-clock>) · [HF](<https://huggingface.co/papers/2611.14488>)

<details>
<summary>Summary</summary>

Many memory-augmented VLA policies fill their memory by time: frames are sampled uniformly along the entire trajectory, and each frame is tagged with a timestamp. Such policies actually learn to "read the clock to estimate progress." When the robot merely pauses or idles, these "null events" in which nothing changes are still treated as work done, so in counting tasks the policy finishes early (the authors call this phantom progress). The root cause lies in the design choice of "indexing memory by time": removing the timestamps does not fix it, nor does augmenting with pause data; switching to event-indexed memory recovers more than half of the loss without retraining.

</details>

**LEASH: Stay Safe in Agentic Robotics**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.14115_slides.en.pdf?v=946d2b2371c20b41>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.14115_slides.pdf?v=cdd3b2bf9bdbf4f3>) · [arXiv](<https://arxiv.org/abs/2611.14115>) · [Code](<https://github.com/zhuqinfeng1999/LEASH>) · [HF](<https://huggingface.co/papers/2611.14115>)

<details>
<summary>Summary</summary>

The authors first build \*\*RoboRisk\*\*, a safety benchmark that covers five categories of risk and runs in closed loop both in simulation and on real robots (92 simulated tasks + 13 real-robot tasks). It shows that when foundation models such as GPT, Claude, Gemini, and Grok control a robotic arm directly, their harm rates range from 9% to 77%. They then propose \*\*LEASH\*\*: a model-agnostic safety layer that requires no retraining. It consists of three "image-based review" safety gates (a task gate, an action gate, and a commit gate), plus a safety policy shared by the planner and the gates. It lowers the harm rate and raises the safe success rate for every planner tested, with about 1.7% extra time and about 0.66% extra cost.

</details>

**ExRL: Sample-Efficient Online Adaptation of Long-Chunk Policies via Execution Length Control**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.13482_slides.en.pdf?v=62c80e1e5b529384>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.13482_slides.pdf?v=9c66d7be7ab9ed33>) · [arXiv](<https://arxiv.org/abs/2611.13482>) · [Code](<https://github.com/Frankluox/ExRL>) · [HF](<https://huggingface.co/papers/2611.13482>)

<details>
<summary>Summary</summary>

\*\*ExRL does not modify the actions within long action chunks (e.g., H=50). It freezes the base policy and uses only off-policy RL to learn a lightweight small network that decides "to replan after executing the first k steps of each predicted action chunk." This shrinks the RL decision space from "a high-dimensional continuous space that grows with chunk length" to "a single discrete scalar in \{1..H\}." All kinds of policies, such as DP, ACT, π0/π0.5, π0-FAST, and Cosmos Policy, can use it for sample-efficient online improvement. On the real robot, π0.5 block stacking improves from 9/20 to 17/20 with only about 10 minutes of physical interaction.\*\*

</details>

**World In-Context Learning for Agentic Robot Manipulation**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.12885_slides.en.pdf?v=41e998cfc4ccf4d7>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.12885_slides.pdf?v=68f4e63330d4b371>) · [arXiv](<https://arxiv.org/abs/2611.12885>) · [Code](<https://github.com/ArcheOne-AI/RoboScript>) · [HF](<https://huggingface.co/papers/2611.12885>)

<details>
<summary>Summary</summary>

The paper proposes \*\*World In-Context Learning (WICL)\*\*: the foundation model's weights stay frozen, and starting from \*\*a single demonstration\*\*, the task is repeatedly "rehearsed" in a simulator, with the feedback from the world written into a readable, semantic \*\*Task Memory\*\* (rather than into network weights). The agentic system built on this paradigm, \*\*RoboScript\*\*, performs no gradient updates and achieves an average clean/randomized success rate of \*\*83.4%\*\* across all 50 tasks of RoboTwin 2.0. The strongest action policy, trained with 50 demonstrations per task, reaches only 61.7%. Moreover, RoboScript shows almost no drop in randomized scenes, and its memory can also transfer to a real heterogeneous dual-arm robot.

</details>

**Learning to Act with World Models by Valuing What Comes Next**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.12200_slides.en.pdf?v=e20c1a0375c624c8>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.12200_slides.pdf?v=16910f56a314565b>) · [arXiv](<https://arxiv.org/abs/2611.12200>) · [Code](<https://github.com/nuskonghou/wm-ppo>) · [HF](<https://huggingface.co/papers/2611.12200>)

<details>
<summary>Summary</summary>

\*\*WM-PPO adds only a world model on top of PPO. During training, the world model predicts the next observation for each candidate action sampled by the policy, and PPO's own critic then estimates a success probability for this "predicted successor state" (the transition value). Comparisons among candidates become an auxiliary advantage for the policy, and their mean becomes an auxiliary target for the critic; the two signals are weighted by reliability through a gate calibrated with real branch outcomes. The whole process requires no teacher model and no privileged information, and only the policy is used at inference. With a comparable number of real interaction steps, success rate on ALFWorld rises from PPO's 63.5% to 87.5%, and on ScienceWorld from 39.3% to 52.9%.\*\*

</details>

**Embodied First Exam**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.12177_slides.en.pdf?v=d57e5fb69aca0224>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.12177_slides.pdf?v=8b48b7b57dcda5c0>) · [arXiv](<https://arxiv.org/abs/2611.12177>) · [Code](<https://github.com/mll-lab-nu/embodied-first-exam>) · [HF](<https://huggingface.co/papers/2611.12177>)

<details>
<summary>Summary</summary>

EFE is a unified robotics evaluation framework for general-purpose coding agents (35 suites, 1,156 tasks, 47 robots). Agents can decide for themselves whether to issue commands directly, write control programs, or train policies. The evaluation finds that the strongest agent, GPT-6 Astra (Codex), solves 77% of the core tasks when it has full simulation state and can reset at will. Under real-robot conditions, with only sensors and no resets, it solves only 30%. If the simulation does not wait for it to think (Realtime), the tasks become harder still. The gap comes mainly from "being unable to retry" and from "phases that require precision", not from "being unable to see the exact state".

</details>

**LO-World: Unified BEV Latent Modeling for Joint 4D Occupancy and LiDAR Forecasting**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.11912_slides.en.pdf?v=8acafe25569eaec1>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.11912_slides.pdf?v=5e23f669167fd001>) · [arXiv](<https://arxiv.org/abs/2611.11912>) · [Code](<https://github.com/lzzzzzm/LO-World>) · [HF](<https://huggingface.co/papers/2611.11912>)

<details>
<summary>Summary</summary>

\*\*LO-World encodes 3D semantic occupancy and LiDAR point clouds into the same BEV latent variable. The encoder uses a hybrid "range image → voxel → BEV" representation. The generator is a flow matching model in which "the context is computed only once and the flow network is very shallow", and with only 4 sampling steps it predicts both modalities 3 seconds into the future at the same time. On nuScenes, both modalities do better than their respective single-modality versions (IoU 53.5→57.5, CD 0.82→0.70), and the end-to-end speed is about 25 FPS (on a single RTX 4090).\*\*

</details>

**DexForesight: Grounding Dexterous Policies with Implicit Spatial Foresight**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.11166_slides.en.pdf?v=8fd5134a878c36c8>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.11166_slides.pdf?v=080dcb6f2b51a42f>) · [arXiv](<https://arxiv.org/abs/2611.11166>) · Code · [HF](<https://huggingface.co/papers/2611.11166>)

<details>
<summary>Summary</summary>

During training, the authors use offline depth, kinematic point clouds from the hand URDF, and demonstration actions to train an "action-conditioned" spatial world model that predicts 3D hand point displacements and changes in DINOv3 features. This world model is then frozen, and its query features are distilled into the latent space of a dexterous-hand VLA policy via alignment distillation. At deployment, the policy uses only RGB, language, and proprioceptive state; it needs no depth and does not generate future frames. Results: success rate on 11 simulated DexJoCo tasks rises from 49.4% to 60.5%; on 3 real-robot tasks it reaches 58.3%, versus 50.0% for the strongest baseline, WLA; inference adds only about 3 ms.

</details>

### November 10, 2026

**SWAM: Scaling World Action Models with Cross-Modal Alignment**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.12870_slides.en.pdf?v=79b8b9d478715dfe>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.12870_slides.pdf?v=f2ea2e14f35af9b4>) · [arXiv](<https://arxiv.org/abs/2611.12870>) · [Code](<https://github.com/shaaaaron/SWAM>) · [HF](<https://huggingface.co/papers/2611.12870>)

<details>
<summary>Summary</summary>

SWAM builds roughly 47,000 hours of multi-source data and systematically studies how a world action model can preserve language-video alignment while learning actions: fine-grained subtask captions, UMI action labels, a 1:1 mix of Ego and UMI data, and an action branch that reads language through video. Together these bring the success rate on RoboTwin randomized scenes to 61.56% and on the real robot to 40%.

</details>

**Learning Heterogeneous Tactile Representation for General Dexterous Manipulation**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.12806_slides.en.pdf?v=9e42455bb2de1665>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.12806_slides.pdf?v=4905926edc535cb1>) · [arXiv](<https://arxiv.org/abs/2611.12806>) · [Code](<https://github.com/Robbyant/lingbot-touch>) · [HF](<https://huggingface.co/papers/2611.12806>)

<details>
<summary>Summary</summary>

LingBot-Touch unifies three types of tactile sensors into a standard fingertip coordinate frame and uses Tactile-JEPA to pretrain a small encoder on 5,000 hours of data. The encoder is frozen and plug-and-play, raising real-robot success rates of four types of policies by 14-25 points and raising simulated RL success rates from 21% to 69%, and it transfers to new sensors with zero parameters.

</details>

**Spatial Harness: Grounding Spatial Reasoning in Executable World States with Physics Engines**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.11344_slides.en.pdf?v=7d973dd00adfb35f>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.11344_slides.pdf?v=e9a51e65bd91e11f>) · [arXiv](<https://arxiv.org/abs/2611.11344>) · [Code](<https://github.com/tmlr-group/Spatial-Harness>) · [HF](<https://huggingface.co/papers/2611.11344>)

<details>
<summary>Summary</summary>

\*\*Spatial Harness splits the spatial reasoning that a VLM would normally "imagine" in its head into two steps: first, a Perceiver fuses the textual constraints in the question with estimates from specialized vision models (detection/depth/orientation/camera pose) into an explicit JSON world state; then this state is instantiated in MuJoCo, where a Reasoner writes Python to rotate the camera, measure distances, and render viewpoints, answering based on feedback computed by the engine. With Qwen3.5-27B, end-to-end accuracy on MindCube rises from 52.70% to 71.14%, 7.52 points higher than pySpatial; given the same ground-truth map, it reaches 98.25%, whereas direct reasoning reaches only 71.81%.\*\*

</details>

**Horizon-Scalable Q-Learning**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.10987_slides.en.pdf?v=40e290d7f7377113>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.10987_slides.pdf?v=36ebbc26ef513635>) · [arXiv](<https://arxiv.org/abs/2611.10987>) · [Code](<https://github.com/ryanxhr/hql>) · [HF](<https://huggingface.co/papers/2611.10987>)

<details>
<summary>Summary</summary>

\*\*HQL assigns each action in the dataset a binary "gate": only when the target critic judges that the action is no worse than the best-of-N action sampled from the BC policy does the TD target extend one more step along the data trajectory; otherwise it falls back to one-step TD. In this way, without requiring any action density, it automatically trades off, transition by transition, between one-step TD (whose errors accumulate along the horizon) and n-step TD (which inherits bias from suboptimal actions), and it clearly outperforms n-step TD, Q-chunking, and LQL on long-horizon offline and offline-to-online RL.\*\*

</details>

**WorldFoundry: Towards Unified Infrastructure for World Intelligence**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.10771_slides.en.pdf?v=f68cc0cedc3bcb1a>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.10771_slides.pdf?v=f3a47b69aa4b8c58>) · [arXiv](<https://arxiv.org/abs/2611.10771>) · [Code](<https://github.com/OpenEnvision/WorldFoundry>) · [HF](<https://huggingface.co/papers/2611.10771>)

<details>
<summary>Summary</summary>

The paper first gives an operational, function-level definition of a "generative world model": a world model must maintain a \*\*persistent state\*\* that interventions change and observations correct, and this loop must be closed, rather than judging only whether the frames look realistic. It then releases the open-source infrastructure \*\*WorldFoundry\*\*, which uses a unified manifest, artifact contract, and evidence scorecard to bring 270 models spanning video, 3D/4D, interactive worlds, and embodied action, together with 74 benchmarks and 62 metric entries, into a single reproducible inference and evaluation pipeline.

</details>

**Auriga Technical Report: A Task-Agnostic Agent Harness for Zero-Shot Embodied Manipulation**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.01112_slides.en.pdf?v=e497b354c35e384d>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.01112_slides.pdf?v=5eb57650af827110>) · [arXiv](<https://arxiv.org/abs/2611.01112>) · [Code](<https://github.com/lose4578/Auriga>) · [HF](<https://huggingface.co/papers/2611.01112>)

<details>
<summary>Summary</summary>

\*\*Auriga trains no policy and does no trial-and-error on target tasks; instead, it equips a general-purpose VLM with a task-agnostic "execution harness": calibrated 3D measurements, bimanual actions targeted at finger contact points, and a single admission gateway that "pauses the world to preview first, verifies against tolerances during execution, and stops on deviation and reports the measured deviation." With this harness, under zero-shot conditions in a single episode without resets, it closes 68.3% of the "planning-execution gap," tops the RoboDojo leaderboard with 57.7% SR / 64.0 Score (the reference harness with the same model achieves only 22.5% / 29.0), and reaches 73.2% SR on RoboCasa365.\*\*

</details>

### November 9, 2026

**Toward the Era of Agentic Embodied Intelligence**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.09124_slides.en.pdf?v=cf5c9b77e9a138ba>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.09124_slides.pdf?v=1c1a59cf62ec4af5>) · [arXiv](<https://arxiv.org/abs/2611.09124>) · [Code](<https://github.com/AutoLab-SAI-SJTU/A2MEAS>) · [HF](<https://huggingface.co/papers/2611.09124>)

<details>
<summary>Summary</summary>

The paper first builds A2-WLA, a strong action model combining "VLA + motion-aware history + implicit world model". When the robot makes an error, the large model MetaBrain together with a diagnostic agent issues correction instructions backed by spatial evidence; this information is encoded into a "correction code" and injected into a frozen action expert through a residual Adapter. At deployment no weights are changed, and the corrective actions are generated directly inside the policy. The system achieves a Q-score of 0.6411 and a full success rate of 45.40% on the 100 public tasks of BEHAVIOR 2026. However, the largest share of the improvement in the overall score comes from the action model itself and from "selecting a model per task"; agentic correction adds only a few more points on top of that.

</details>

**ODE Policy: Robot Learning via Action Dynamics, Not Actions**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.01729_slides.en.pdf?v=a729db24981a71b9>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.01729_slides.pdf?v=7f5fb23ecd0fab73>) · [arXiv](<https://arxiv.org/abs/2611.01729>) · [Code](<https://github.com/NTUMARS/ODE-POLICY>) · [HF](<https://huggingface.co/papers/2611.01729>)

<details>
<summary>Summary</summary>

ODE Policy uses a neural ODE to learn a velocity field over actions, with each action integrated from the previous one, so execution is naturally continuous. It reaches 79.2% on LIBERO after 1 epoch of training, generates 10.8x faster than flow matching, and is best on all 14 real-robot tasks, but its advantage lies mainly in the early stage of training.

</details>

### November 6, 2026

**VFlash: Fast, Accurate Visual Planning via Flash Primitive Decoding**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.08449_slides.en.pdf?v=533e65ad6f97bdce>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.08449_slides.pdf?v=fc535a35f7aedecd>) · [arXiv](<https://arxiv.org/abs/2611.08449>) · [Code](<https://github.com/NVlabs/Eagle>) · [HF](<https://huggingface.co/papers/2611.08449>)

<details>
<summary>Summary</summary>

VFlash first uses a tool call to declare the type and length of a visual primitive (boxes, 2D/3D trajectories, dense point motion), then has a lightweight block-diffusion drafter output the entire primitive in a single forward pass; as long as the structure is valid, it is accepted directly, without requiring token-by-token agreement with the autoregressive target model. As a result, VLM visual-planning decoding is 12–42× faster on Jetson Thor, DGX Spark, and H100 (2.6–5.2× end-to-end), while the 3D robot trajectory error is actually 18–61% lower than with AR, and a WAM conditioned on its plans raises its average success rate on MolmoSpaces from 62.6% to 70.2%.

</details>

**SLA: Scaling Spatial-Language-Action Model via Continual Pre-training**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.08373_slides.en.pdf?v=d70a0bbc6417546c>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.08373_slides.pdf?v=448e9e6367e2472f>) · [arXiv](<https://arxiv.org/abs/2611.08373>) · [Code](<https://github.com/OpenHelix-Team/Spatial-Forcing>) · [HF](<https://huggingface.co/papers/2611.08373>)

<details>
<summary>Summary</summary>

SLA starts from π0.5 and performs continual pre-training on about 1.7M heterogeneous robot trajectories: during training, it cosine-aligns the visual tokens from the VLA's intermediate layers with features from the frozen 3D perception model OmniVGGT (using multi-layer gated fusion together with state dropout), and this alignment is kept during the post-training stage as well. At inference, the architecture is exactly the same as π0.5, and neither depth nor camera calibration is required. The method achieves SOTA on LIBERO-Plus, RoboTwin 2.0 (Clean2Random), RoboCasa-Panda, and RoboDojo-Real, and across 8 real-robot conditions its average success rate is 24 percentage points higher than π0.5.

</details>

**Towards Real-Time Full-Waveform LiDAR Transformers via Intensity-Guided Token Reduction and Physics-Aware Augmentation**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.07613_slides.en.pdf?v=7622d0201e1e18cb>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.07613_slides.pdf?v=d1516c6c83e8fe2b>) · [arXiv](<https://arxiv.org/abs/2611.07613>) · [Code](<https://github.com/Keio-CSG/FWL-ToPM>) · [HF](<https://huggingface.co/papers/2611.07613>)

<details>
<summary>Summary</summary>

In full-waveform LiDAR data, the vast majority of voxels are near-zero background noise. Building on this observation, the authors propose two methods: FWL-ToPM prunes 70% of low-intensity tokens based on each patch's maximum intensity, then sorts the remaining tokens along a Morton curve before merging them by similarity; FWLAug consists of two mixing augmentations (CutMix and ShiftMix) that preserve the "per-ray waveform + frustum geometry" structure. On Ghost-FWL ghost/glass detection, the former raises the FWL Transformer from 6.5 FPS to 53.2 FPS (8x faster) while increasing F1-mean from 0.503 to 0.592; the latter further improves F1 on the off-site OOD test set by 4.6 points.

</details>

**Open-HumanScale: An Open Recipe for Scaling Human and Robot Experience for Embodied Foundation Models**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.06817_slides.en.pdf?v=a9665d1d5dc9e35b>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.06817_slides.pdf?v=fb2fe4ce6fed5bc5>) · [arXiv](<https://arxiv.org/abs/2611.06817>) · [Code](<https://github.com/DAGroup-PKU/HumanNet>) · [HF](<https://huggingface.co/papers/2611.06817>)

<details>
<summary>Summary</summary>

\*\*The authors curated 50,000 hours of first-person human video with hand-motion and language annotations, and open-sourced all of it. After using it to pre-train a "world–action model" (WAM), the robot's success rate in out-of-distribution scenes rises approximately log-linearly with the number of pre-training hours. Building on this, by further adding 14,600 hours of robot data and switching to goal images to specify tasks, the resulting HumanWAM-Goal achieves an average success rate of 88.65% on RoboTwin 2.0 (SOTA), can also execute tasks zero-shot, and can change its behavior simply by swapping the goal image ("embodied in-context learning").\*\*

</details>

**Future Representation Distillation for Imagination-free World Action Models**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.04527_slides.en.pdf?v=f8925d0ec0eba795>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.04527_slides.pdf?v=2d5d86f661681aec>) · [arXiv](<https://arxiv.org/abs/2611.04527>) · [Code](<https://github.com/harryjo97/dreamfree>) · [HF](<https://huggingface.co/papers/2611.04527>)

<details>
<summary>Summary</summary>

DreamFree uses a frozen video diffusion model (which has seen the complete future video) as a teacher and distills its intermediate-layer representations into a video DiT encoder that \*\*only sees the current frame\*\*. This way, the policy needs only a single forward pass to obtain visual features that "foresee the future", which an action DiT then decodes into actions. It retains the predictive capability of the video prior while eliminating the iterative generation of future video: on a 14B backbone it achieves 11Hz closed-loop control, 17.8 times faster than DreamZero; its real-world DROID success rate is 64%, compared with 56% for DreamZero and 16% for π0.5.

</details>

**HeLM: Hierarchical Explicit Language Memory for Non-Markovian Manipulation**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.02660_slides.en.pdf?v=1d0213b7bd9741fa>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.02660_slides.pdf?v=f7570fb78834b54a>) · [arXiv](<https://arxiv.org/abs/2611.02660>) · [Code](<https://github.com/kimspacehuni/HeLM>) · [HF](<https://huggingface.co/papers/2611.02660>)

<details>
<summary>Summary</summary>

HeLM uses a fine-tuned VLM as the high-level policy, which writes task progress into a short, structured textual memory via a two-step process of "detect events → update only when an event is triggered" (divided into within-episode working memory and cross-episode episodic context), and then hands action commands to a VLA such as π0 for execution. On 10 real-robot non-Markovian tasks, its intra-episode subtask success rate is 85.7% (strongest baseline 72.9%), and its inter-episode success rate is 89.2% (baseline 16.6%). Compared with approaches that store visual keyframes, over long horizons it uses about 1/4.5 of the GPU memory and is about 2.5 times faster.

</details>

### November 5, 2026

**From Pixels to Actions - Towards Native Vision-Language-Action Policies**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.06918_slides.en.pdf?v=66ee679282f33d97>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.06918_slides.pdf?v=599bbe7743578d4e>) · [arXiv](<https://arxiv.org/abs/2611.06918>) · [Code](<https://github.com/EvolvingLMMs-Lab/NEO>) · [HF](<https://huggingface.co/papers/2611.06918>)

<details>
<summary>Summary</summary>

NEO-VLA removes the vision encoder: pixels are patchified via convolution and fed together with language into a 2B native backbone, while an action expert reads the KV layer by layer. It finds that control-critical visual information often peaks in early layers; even with the backbone frozen, it outperforms encoder-based models, reaching 89.7 on LIBERO-plus and 69.4 on RoboTwin with randomization.

</details>

**PyRUA-REAL: Robot Exploration and Adaptive Learning through RSI in the Real World**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.06768_slides.en.pdf?v=e640ea379965476d>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.06768_slides.pdf?v=2c28e391e943f073>) · [arXiv](<https://arxiv.org/abs/2611.06768>) · [Code](<https://github.com/DAGroup-PKU/PyRUA-Lean>) · [HF](<https://huggingface.co/papers/2611.06768>)

<details>
<summary>Summary</summary>

\*\*PyRUA-REAL lets two coding agents, a "researcher + engineer" pair, repeatedly experiment, diagnose, and modify code directly on a real bimanual Franka. It distills experimental experience into a three-layer memory (facts / lessons learned / reusable code), and ultimately consolidates each task into a program that does not need to call a large model at runtime. The average development-time success rate across 8 real-robot tasks is 91.1% (with cable insertion still requiring online agent assistance), the success rate on 42 RoboDojo tasks is 84.4%, and execution is about 5-11 times faster than the online agent.\*\* This paper is more of an empirical study report about how the process of embodied RSI should be organized (division of labor, feedback, task specification, skill reuse), rather than a proposal of a new algorithm.

</details>

**PyRUA-DataFarm: LLM Agent as a Cost-Efficient Teleoperator for Real-Ready Robot Data**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.05320_slides.en.pdf?v=7076ded8d776d78f>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.05320_slides.pdf?v=ca0880096266f41f>) · [arXiv](<https://arxiv.org/abs/2611.05320>) · [Code](<https://github.com/DAGroup-PKU/PyRUA-Lean>) · [HF](<https://huggingface.co/papers/2611.05320>)

<details>
<summary>Summary</summary>

\*\*Given just one real-robot calibration recording and a one-sentence task requirement, a coding agent can automatically reconstruct the task in simulation and write an expert controller and hidden success criteria. The simulator provides precise actions, a video model conditioned on real images renders each trajectory into multi-view photorealistic video, and an independent reviewer then vets each trajectory one by one. Training π0.5 on 100 pieces of "farm data" obtained this way achieves 93/100 successes across 5 real-robot bimanual tasks, versus 84/100 for the same amount of teleoperation data; with unseen tablecloths and colored lighting, it is 87 vs 46. The one-time cost per task is about $21 in API fees plus a $5 rendering contract, after which each piece of data costs about $0.8.\*\*

</details>

**DRAP: Dynamics-Risk Adaptive Plasticity for Continual Learning in Physical AI**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.05029_slides.en.pdf?v=2ab9cd273c9df7fc>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.05029_slides.pdf?v=0f268bf93ee4d89e>) · [arXiv](<https://arxiv.org/abs/2611.05029>) · [Code](<https://github.com/oswaldoludwig/DRAP-Dynamics-Risk-Adaptive-Plasticity>) · [HF](<https://huggingface.co/papers/2611.05029>)

<details>
<summary>Summary</summary>

DRAP first fits local linear dynamics from expert trajectories and uses the largest singular value of the state transition matrix, σ\_max(A\_t), to measure "how much an error at this moment would be physically amplified"; it then uses this risk to weight per-sample action gradients, accumulates them into tensor-level importance, and finally directly lowers the AdamW learning rate for important tensors. The whole method uses no replay and stores no reference weights. On OpenVLA trained sequentially on LIBERO Spatial→Object→Goal, average forgetting drops from 0.77 for standard fine-tuning and 0.63 for EWC to 0.31.

</details>

**Human-to-Robot Transfer via Bridging Representation and Action Space in VLAs**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.04391_slides.en.pdf?v=ea668c9cc4077f7c>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.04391_slides.pdf?v=da871431b358a18f>) · [arXiv](<https://arxiv.org/abs/2611.04391>) · [Code](<https://github.com/jun-brro/h2rb-code>) · [HF](<https://huggingface.co/papers/2611.04391>)

<details>
<summary>Summary</summary>

H2RB builds two "bridges" on top of a VLA pretrained on robot data: on the perception side, it uses "wrist + five-fingertip geometry" to supervise VLM features; on the action side, it uses a latent action tokenizer with "a shared encoder + separate decoders for human and robot". This way, using only \*\*unpaired\*\* human hand videos, it can teach a real robot new objects and new skills. On OpenArm, object transfer improves from 8.0 to 51.8, and the skill of opening/closing an air fryer, which the baseline cannot transfer, scores 62.7 (out of 100, a score weighted by completion progress).

</details>

### November 4, 2026

**DreamX: Video Diffusion Model is a Universal Latent Action Learner**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.05377_slides.en.pdf?v=1bbb7939410e6f9f>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.05377_slides.pdf?v=3a7e7fc426e80882>) · [arXiv](<https://arxiv.org/abs/2611.05377>) · Code · [HF](<https://huggingface.co/papers/2611.05377>)

<details>
<summary>Summary</summary>

DreamX uses the pretrained video diffusion model Cosmos-Predict2.5 (2B) \*\*as both the encoder and the decoder\*\*: learnable queries read out latent actions of 4 tokens per latent frame from the backbone's spatiotemporal features (1,200→4, a 300x compression), and then the same backbone reconstructs the future video from only "initial frame + latent actions." In this way, appearance is left to the initial frame and the generative prior to explain, so the latent actions are forced to encode only motion. The resulting latent action space can be shared across humans and robots: on LARYBench it substantially outperforms existing latent action models, it enables human-to-robot video transfer and action transfer without paired data, and it can also serve as the prediction target for lightweight policies, thereby eliminating the step of generating future videos.

</details>

**Route Anything: A Study of Model and Policy Routing for General-Purpose AI Systems**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.05275_slides.en.pdf?v=16a9228cd6c10605>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.05275_slides.pdf?v=8a2e2622849e53b2>) · [arXiv](<https://arxiv.org/abs/2611.05275>) · [Code](<https://github.com/InfRec-Cardinal/route-anything>) · [HF](<https://huggingface.co/papers/2611.05275>)

<details>
<summary>Summary</summary>

The authors first build a unified theory of routing (prices, reference models, an information ladder, and certifiable quality floors), then run 452 candidate configurations on the same set of inputs across 25 benchmarks, obtaining 370,000 scored records covering text, images, video, speech, coding agents, and robotics. The conclusion is: \*\*the ceiling for picking the best candidate per input is indeed not low (the oracle is 5.4 points higher than the best fixed candidate), but learned routers capture only a very small portion of this in quality (+0.3 points). The truly reliable gain from routing is that "the cheap route is already good enough": with quality roughly on par, efficiency is on average 8.82 times that of the reference model.\*\*

</details>

**RoboTryOn: Synthesizing Dexterous Robot Demonstrations from Human Videos via Virtual Try-On**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.05163_slides.en.pdf?v=40ac6269170768d1>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.05163_slides.pdf?v=d32623a0a30e0e85>) · [arXiv](<https://arxiv.org/abs/2611.05163>) · [Code](<https://github.com/ryan-seungyong-lee/RoboTryOn>) · [HF](<https://huggingface.co/papers/2611.05163>)

<details>
<summary>Summary</summary>

\*\*RoboTryOn treats "converting human videos into robot demonstrations" as video virtual try-on: it preserves the human's motion, the objects, and the background, and only "re-dresses" the human hands and arms as the target dexterous-hand robot. Concretely, it first autoregressively translates keyframes, then uses hand-skeleton-guided video frame interpolation, and finally uses an inverse dynamics model (IDM) to read out joint actions from the generated video. Using only human videos, it raises π0.5's average success rate from about 2% to 60% on 7 new tasks (including bimanual tasks) that never had teleoperated demonstrations; to reach the same performance, the data collection cost is about one third that of teleoperation.\*\*

</details>

**PrimeSim: A Generalist World Model Simulator from Large-Scale Cross-Embodiment Demonstrations**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.04870_slides.en.pdf?v=06c2563ed7bb9e0f>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.04870_slides.pdf?v=5f034c149bb65ffd>) · [arXiv](<https://arxiv.org/abs/2611.04870>) · [Code](<https://github.com/PrimebotTech/PrimeSim>) · [HF](<https://huggingface.co/papers/2611.04870>)

<details>
<summary>Summary</summary>

PrimeSim starts from the Wan2.2-TI2V-5B video generation model, first performing "mid-training" on 30,110 hours of robot data from 22 platforms so that it learns to generate \*\*action-conditioned, three-view-consistent\*\* videos; it then uses four-stage "fast video, slow memory" post-training to turn it into an autoregressive simulator with \*\*4-step denoising, about 10 FPS, and stable rollout generation for 60–105 seconds\*\*. It takes first place in four of the five sub-items of WorldSimProbe and has the highest overall EWMBench score (6.09). On LIBERO, the policy success rates it produces correlate with those of the physics simulator at r=0.99, and the policy gains from GRPO training run inside it also transfer back to the physics simulator.

</details>

**Say the Same, Act Differently: Diagnosing and Steering Text-Action Divergence in Reasoning VLAs**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.04166_slides.en.pdf?v=e045c3ef8581b389>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.04166_slides.pdf?v=445262cd6ef3d67c>) · [arXiv](<https://arxiv.org/abs/2611.04166>) · [Code](<https://github.com/nerfies/nerfies.github.io>) · [HF](<https://huggingface.co/papers/2611.04166>)

<details>
<summary>Summary</summary>

In VLA models with reasoning, text and actions read from the same hidden state, yet the directions within it that "most drive the action" are nearly orthogonal to the gradient of the text loss (an overlap of only 1.87% in Alpamayo and 5.28% in InstructVLA). The authors project the text gradient out of the action directions to obtain the TNAS direction, and then steer adversarial image perturbations along this direction, which makes the model produce a word-for-word identical rationale while changing the action into a dangerous one. On Alpamayo, full-image perturbations caused "new collisions with an unchanged rationale" in 52.6% of scenarios, and local patches did so in 35.1% of scenarios. The conclusion is that an unchanged rationale does not prove the action is safe, and monitoring must directly inspect the action channel.

</details>

**RoboColosseum: Evaluating Physical Intelligence at Scale In-The-Wild**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.02497_slides.en.pdf?v=4a877e8f2942284a>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.02497_slides.pdf?v=4196d06bd5188744>) · [arXiv](<https://arxiv.org/abs/2611.02497>) · [Code](<https://github.com/RoboColosseum/robocolosseum-client>) · [HF](<https://huggingface.co/papers/2611.02497>)

<details>
<summary>Summary</summary>

RoboColosseum evaluates 8 models in a distributed manner across 124 real-world sites and 4 embodiments: frontier agents can match VLAs zero-shot, but success rates on open-ended tasks are generally extremely low; rankings flip depending on embodiment and track, the G1 humanoid completed no tasks at all, and active pairing can save about half of the trials.

</details>

**Are Frontier VLM Agents Ready to Be Robot Generalists? An Empirical Study with the Embodied Agent Arena**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2610.00854_slides.en.pdf?v=3592d68d0f51d3ee>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2610.00854_slides.pdf?v=52a4f0873c6e3291>) · [arXiv](<https://arxiv.org/abs/2610.00854>) · [Code](<https://github.com/embodied-agent-arena/embodied-agent-arena>) · [HF](<https://huggingface.co/papers/2610.00854>)

<details>
<summary>Summary</summary>

\*\*Not yet ready.\*\* The authors built the Embodied Agent Arena with 1,000 cases covering five capability domains (including the self-built geometry benchmark GeoProbe), and evaluated 10 frontier VLM agents under a minimal harness. Closed-source models lead in all five domains, but even the strongest model achieves only about 48% success in Manipulation. More importantly, failures often occur after "the intermediate steps were already done correctly": the point lands on the target but the region is not boxed correctly, the placement action call is valid but places the object into the wrong container, the gripper reaches the right position but fails to grasp the object, and the agent claims "already seated" when it has not actually sat down. Extra computation such as code repair and self-review also cannot reliably fix these problems.

</details>

### November 3, 2026

**When Does Latent Prediction Error Support Physical Surprise Claims in Video World Models?**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.01815_slides.en.pdf?v=29643aaea4a30042>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.01815_slides.pdf?v=5a29c04940bb7dab>) · [arXiv](<https://arxiv.org/abs/2611.01815>) · [Code](<https://github.com/3-ml/jepa-surprise>) · [HF](<https://huggingface.co/papers/2611.01815>)

<details>
<summary>Summary</summary>

\*\*Some physical information can indeed be read out from the representations of video world models, and the models do make use of the input actions, but their own latent-space prediction error mainly tracks trajectory type, appearance color, and static content, and does not reliably reflect "physical violations."\*\* In one set of controlled experiments, physically impossible events even had lower error than possible events, and a fixed threshold would misreport every legitimate "stopping on a solid platform" as a violation. Therefore, prediction error cannot be directly treated as "physical surprise."

</details>

**Democratizing Robot-Use Agents: A Unified Harness with Open Models**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.01560_slides.en.pdf?v=e4c17a7649d75ef2>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.01560_slides.pdf?v=5903bc133d53b93e>) · [arXiv](<https://arxiv.org/abs/2611.01560>) · [Code](<https://github.com/Open-RUA/uni-robot-agent>) · [HF](<https://huggingface.co/papers/2611.01560>)

<details>
<summary>Summary</summary>

The paper proposes uni-robot-agent, a unified, modular robot-use agent framework that supports pipelined execution. Without using privileged information such as depth or task-success judges, the open-source Qwen3.8-Flash-Next scores 31.39 on RoboDojo, higher than the officially reported GPT-6 Astra+RoboProbe (28.97), and on 19 real-robot tasks it matches a fine-tuned π0.5. The paper further argues that robot-use ability stems from four general capabilities (visual understanding, spatial grounding, geometric encoding, and embodied reasoning), and that future training should improve all four at the same time.

</details>

**TinyAstral: Transferring Self-Evolving Harnesses to Tiny Generalist Manipulation Agents**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2610.41216_slides.en.pdf?v=837d6cbd7e6539a6>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2610.41216_slides.pdf?v=2710179ef71348e3>) · [arXiv](<https://arxiv.org/abs/2610.41216>) · [Code](<https://github.com/Garfield-kh/TinyAstral>) · [HF](<https://huggingface.co/papers/2610.41216>)

<details>
<summary>Summary</summary>

TinyAstral first freezes an open-source large-model teacher (Qwen3.8-Flash-Next, labeled as roughly 180B in the figure), and has a frontier LLM agent, gated by statistical testing, recursively improve the tool/feedback/memory/recovery "harness" around it (RoboTwin success rate 33.4%→63.6%). It then collects teacher trajectories with reasoning and failure recovery inside the frozen final harness and distills them into 0.8B–4B students. The 4B student reaches 62.8% in the same harness, close to the teacher; on three benchmarks never used for training it approaches a 552B model; and at deployment it requires roughly one-fifth of the teacher's accelerator time.

</details>

**WorldFlow: Joint Video and 3D Motion Prediction via Large-Scale Pretraining**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2610.39278_slides.en.pdf?v=32586fcf9686c169>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2610.39278_slides.pdf?v=13614a1d6df9f091>) · [arXiv](<https://arxiv.org/abs/2610.39278>) · [Code](<https://github.com/worldflow-rbs/worldflow>) · [HF](<https://huggingface.co/papers/2610.39278>)

<details>
<summary>Summary</summary>

WorldFlow adds a "3D displacement token" modality to the pretrained video world model Cosmos-Nano: given an image, an instruction, and a number of 3D query points, a single MoT generator under rectified flow \*\*jointly denoises the future video and the metric 3D trajectories of these points\*\*. After training on about 1.44 million samples, it achieves the lowest ADE/FDE among all learned methods on WorldFlowBench, a benchmark built by the authors. Ablations show that "generating video along the way" reduces 3D motion prediction error by nearly half. However, on the real-world subset Real3 it still underperforms the "stay completely still" Static reference, which is worth noting.

</details>

### November 2, 2026

**RoboArchitect: Automating the Design of Robotic Agents with Persistent Memory**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2610.42141_slides.en.pdf?v=19cd1be1baa0272e>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2610.42141_slides.pdf?v=b1ecb4d04df3ae37>) · [arXiv](<https://arxiv.org/abs/2610.42141>) · [Code](<https://github.com/roboarchitect-ai/RoboArchitect>) · [HF](<https://huggingface.co/papers/2610.42141>)

<details>
<summary>Summary</summary>

\*\*Without updating any model weights, a coding LLM (claude-opus-5) repeatedly reviews robot execution recordings, diagnoses the causes of failure, and rewrites the layer of control code wrapped around a frozen VLA policy (the "harness", including tool calls, programmatic control, and a persistent memory it designs itself). After 5 iterations, the held-out average success rate rises from 9.7% to 43.3% on unseen scenes and from 12.7% to 40.2% on unseen tasks. In settings outside the policy's training distribution, a generalist policy wrapped this way sometimes even outperforms the fine-tuned version of the same model.\*\*

</details>

**CausalWAM: Learning the Causes of Actions in World Action Models**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2610.42096_slides.en.pdf?v=895d73873299254d>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2610.42096_slides.pdf?v=005b5978dfe88c18>) · [arXiv](<https://arxiv.org/abs/2610.42096>) · Code · [HF](<https://huggingface.co/papers/2610.42096>)

<details>
<summary>Summary</summary>

World action models (WAMs) must encode the entire scene in order to predict frames, but merely fitting demonstration data does not guarantee that actions are generated only by the latent variables that "actually cause the actions". The authors prove that imposing a sparsity constraint on the "latent variable -&gt; action" dependency structure allows the action-relevant latent block to be identified (up to an invertible within-block transformation) from purely observational data, without requiring temporal assumptions. Based on this, they add a routing branch with top-k sparsity regularization to the action head of Cosmos 3 (CWAM). The average success rate on RoboCasa365 rises from 0.24 to 0.43, and real-robot block stacking rises from 0.46 to 0.82.

</details>

**REA: A Routed Embodied Agent Runtime for Asynchronous Brain-Cerebellum Control**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2610.42053_slides.en.pdf?v=4a8b6e4d6574b06d>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2610.42053_slides.pdf?v=4ba90c08ae18b51d>) · [arXiv](<https://arxiv.org/abs/2610.42053>) · Code · [HF](<https://huggingface.co/papers/2610.42053>)

<details>
<summary>Summary</summary>

REA is a three-layer "brain-router-cerebellum" embodied runtime. Its rule is that "a running policy never waits for the brain": the brain (System 2) generates policies in an offline phase, and online it only makes completion judgments at the boundaries where policies return; the router (System 1) dispatches policies via a lookup table based on success rates measured on a development set, and escalates recovery step by step within a shared budget. This lets fast policies (code policies, VLAs, whole-body controllers) run at their own frequencies. On 3,000 test episodes of LIBERO-Pro, REA reaches a 95.9% success rate, slightly higher than the strongest single method in the pool (94.7%), with 17% less control time; it also transfers to RoboTwin, BEHAVIOR-1K, and real robots.

</details>

**CaPtain: A Pipeline for Post-Training Code-as-Policy Robot Agents**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2610.40799_slides.en.pdf?v=942d0559d7bcbbab>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2610.40799_slides.pdf?v=92c13daa2238dbc1>) · [arXiv](<https://arxiv.org/abs/2610.40799>) · [Code](<https://github.com/waltstephen/CaPtain>) · [HF](<https://huggingface.co/papers/2610.40799>)

<details>
<summary>Summary</summary>

CaPtain gives a 4B open-source VLM only low-level primitives, first performs SFT on trajectories from frontier models, then performs multi-turn RL with a critic that reads privileged simulator state, raising the LIBERO success rate from 0% to 73.8% and reaching 78.5% on LIBERO-PRO, surpassing multiple frontier-model agents.

</details>

**WorldBridge: Bridging Video and Action for Task Generalization in World Action Models**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2610.40748_slides.en.pdf?v=857d49a68fd4c796>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2610.40748_slides.pdf?v=a4994c610582ada6>) · [arXiv](<https://arxiv.org/abs/2610.40748>) · Code · [HF](<https://huggingface.co/papers/2610.40748>)

<details>
<summary>Summary</summary>

WorldBridge decomposes task generalization in world action models into video prediction and a bridge from video to action: adding only unlabeled videos of new tasks raises the success rate from 25.07% to 55.90%, and adding 1 more demonstration per task reaches 70.70%; the proposed model leads on most manipulation benchmarks and achieves an average of 72.5% on real robots.

</details>

**Probing Spatial State Representations in Visual Foundation Models**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2610.40636_slides.en.pdf?v=1a7ea56e558bbbe8>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2610.40636_slides.pdf?v=5454537e0d72b40f>) · [arXiv](<https://arxiv.org/abs/2610.40636>) · [Code](<https://github.com/yyyybq/Probing_Spatial_State_Release>) · [HF](<https://huggingface.co/papers/2610.40636>)

<details>
<summary>Summary</summary>

The paper decomposes "spatial state representation" into four progressively hierarchical functional levels: spatial structure, object permanence, predictive spatial updating, and actionability. On streaming first-person video from ScanNet++, the authors test 10 visual foundation models using frozen-feature probes and find that: \*\*no model leads on all tasks; the three questions of "what can be decoded", "whether history/actions/goals are actually used", and "whether goals are actually useful for acting" dissociate from one another\*\*. In addition, object permanence and action capability depend on the decodability of camera pose, while feature prediction depends on the decodability of the visible scene.

</details>

**HiFOR: Hierarchical Foresight with Action-Guided World Grounding for Vision-Language-Action Model**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2610.40373_slides.en.pdf?v=a05ee3eee9f7bdce>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2610.40373_slides.pdf?v=ab45ee52df7bd773>) · [arXiv](<https://arxiv.org/abs/2610.40373>) · Code · [HF](<https://huggingface.co/papers/2610.40373>)

<details>
<summary>Summary</summary>

HiFOR jointly predicts short-term states, semantic milestones, and the final goal within a VLA, organizing them into a structured latent world spanning time x viewpoint x space, which is decomposed and retrieved on demand by the action during denoising; compared with π0.5, it improves by 9.05 points on RoboTwin Hard and by 11 points on real robots.

</details>

**Learning Quality-Controllable Robot Policies with Iterative Hindsight Relabeling**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2610.37393_slides.en.pdf?v=e995f724cc2e7e14>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2610.37393_slides.pdf?v=c589a925686ae487>) · [arXiv](<https://arxiv.org/abs/2610.37393>) · [Code](<https://github.com/google-deepmind/mujoco_menagerie>) · [HF](<https://huggingface.co/papers/2610.37393>)

<details>
<summary>Summary</summary>

The authors quantize "execution quality" (speed, smoothness, path length, tray stability, etc.) into quantile labels and feed them as conditioning inputs to a behavior cloning policy (QCP), so that at inference time the quality level can be specified like turning a knob. They then use an iterative loop of "collect rollouts at the highest level → keep only successful trajectories → relabel in hindsight by measured quality → retrain from scratch", which, without any human annotation, pushes the controllable quality range beyond the initial demonstrations. Quality and success rate improve simultaneously, and on real robots this shows up as +59% conveyor-belt throughput and −27% tilt angle when carrying a tray of wine.

</details>

**OSWAM: An Effective World Action Model with One-Step Action Generation**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2610.35850_slides.en.pdf?v=16f5733751b662e1>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2610.35850_slides.pdf?v=99e78fe0a3d09ed1>) · [arXiv](<https://arxiv.org/abs/2610.35850>) · [Code](<https://github.com/PolyU-VCLab/OSWAM>) · [HF](<https://huggingface.co/papers/2610.35850>)

<details>
<summary>Summary</summary>

Instead of having the Action DiT start from Gaussian noise, OSWAM places a small extra set of "imagination tokens" (AIT/SIT) in the Video DiT, obtaining a coarse action prior in a single forward pass, which the Action DiT then refines with one denoising step; at the same time, it performs feature distillation from a teacher that can see future frames. This reduces action denoising in the direct-policy world action model (direct-policy WAM) from 10 steps to 1: PDMS on NAVSIM stays at 90.3, the success rate on RoboTwin 2.0 is 90.0% (1.8 points lower than the 10-step Fast-WAM), end-to-end speed improves by about 3x, and latency after compilation is 40–53 ms (RTX 5090).

</details>


## Popular Papers


Snapshot: 2026-11-12 (Asia/Shanghai). Ranked by current cumulative Hugging Face upvotes; updated with the daily publication.


### Last 7 Days


**VFlash: Fast, Accurate Visual Planning via Flash Primitive Decoding**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.08449_slides.en.pdf?v=533e65ad6f97bdce>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.08449_slides.pdf?v=fc535a35f7aedecd>) · [arXiv](<https://arxiv.org/abs/2611.08449>) · [Code](<https://github.com/NVlabs/Eagle>) · [HF](<https://huggingface.co/papers/2611.08449>) · 114 HF upvotes

<details>
<summary>Summary</summary>

VFlash first uses a tool call to declare the type and length of a visual primitive (boxes, 2D/3D trajectories, dense point motion), then has a lightweight block-diffusion drafter output the entire primitive in a single forward pass; as long as the structure is valid, it is accepted directly, without requiring token-by-token agreement with the autoregressive target model. As a result, VLM visual-planning decoding is 12–42× faster on Jetson Thor, DGX Spark, and H100 (2.6–5.2× end-to-end), while the 3D robot trajectory error is actually 18–61% lower than with AR, and a WAM conditioned on its plans raises its average success rate on MolmoSpaces from 62.6% to 70.2%.

</details>


**Learning Heterogeneous Tactile Representation for General Dexterous Manipulation**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.12806_slides.en.pdf?v=9e42455bb2de1665>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.12806_slides.pdf?v=4905926edc535cb1>) · [arXiv](<https://arxiv.org/abs/2611.12806>) · [Code](<https://github.com/Robbyant/lingbot-touch>) · [HF](<https://huggingface.co/papers/2611.12806>) · 101 HF upvotes

<details>
<summary>Summary</summary>

LingBot-Touch unifies three types of tactile sensors into a standard fingertip coordinate frame and uses Tactile-JEPA to pretrain a small encoder on 5,000 hours of data. The encoder is frozen and plug-and-play, raising real-robot success rates of four types of policies by 14-25 points and raising simulated RL success rates from 21% to 69%, and it transfers to new sensors with zero parameters.

</details>


**SLA: Scaling Spatial-Language-Action Model via Continual Pre-training**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.08373_slides.en.pdf?v=d70a0bbc6417546c>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.08373_slides.pdf?v=448e9e6367e2472f>) · [arXiv](<https://arxiv.org/abs/2611.08373>) · [Code](<https://github.com/OpenHelix-Team/Spatial-Forcing>) · [HF](<https://huggingface.co/papers/2611.08373>) · 88 HF upvotes

<details>
<summary>Summary</summary>

SLA starts from π0.5 and performs continual pre-training on about 1.7M heterogeneous robot trajectories: during training, it cosine-aligns the visual tokens from the VLA's intermediate layers with features from the frozen 3D perception model OmniVGGT (using multi-layer gated fusion together with state dropout), and this alignment is kept during the post-training stage as well. At inference, the architecture is exactly the same as π0.5, and neither depth nor camera calibration is required. The method achieves SOTA on LIBERO-Plus, RoboTwin 2.0 (Clean2Random), RoboCasa-Panda, and RoboDojo-Real, and across 8 real-robot conditions its average success rate is 24 percentage points higher than π0.5.

</details>


**World In-Context Learning for Agentic Robot Manipulation**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.12885_slides.en.pdf?v=41e998cfc4ccf4d7>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.12885_slides.pdf?v=68f4e63330d4b371>) · [arXiv](<https://arxiv.org/abs/2611.12885>) · [Code](<https://github.com/ArcheOne-AI/RoboScript>) · [HF](<https://huggingface.co/papers/2611.12885>) · 66 HF upvotes

<details>
<summary>Summary</summary>

The paper proposes \*\*World In-Context Learning (WICL)\*\*: the foundation model's weights stay frozen, and starting from \*\*a single demonstration\*\*, the task is repeatedly "rehearsed" in a simulator, with the feedback from the world written into a readable, semantic \*\*Task Memory\*\* (rather than into network weights). The agentic system built on this paradigm, \*\*RoboScript\*\*, performs no gradient updates and achieves an average clean/randomized success rate of \*\*83.4%\*\* across all 50 tasks of RoboTwin 2.0. The strongest action policy, trained with 50 demonstrations per task, reaches only 61.7%. Moreover, RoboScript shows almost no drop in randomized scenes, and its memory can also transfer to a real heterogeneous dual-arm robot.

</details>


**WorldFoundry: Towards Unified Infrastructure for World Intelligence**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.10771_slides.en.pdf?v=f68cc0cedc3bcb1a>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.10771_slides.pdf?v=f3a47b69aa4b8c58>) · [arXiv](<https://arxiv.org/abs/2611.10771>) · [Code](<https://github.com/OpenEnvision/WorldFoundry>) · [HF](<https://huggingface.co/papers/2611.10771>) · 57 HF upvotes

<details>
<summary>Summary</summary>

The paper first gives an operational, function-level definition of a "generative world model": a world model must maintain a \*\*persistent state\*\* that interventions change and observations correct, and this loop must be closed, rather than judging only whether the frames look realistic. It then releases the open-source infrastructure \*\*WorldFoundry\*\*, which uses a unified manifest, artifact contract, and evidence scorecard to bring 270 models spanning video, 3D/4D, interactive worlds, and embodied action, together with 74 benchmarks and 62 metric entries, into a single reproducible inference and evaluation pipeline.

</details>


**Toward the Era of Agentic Embodied Intelligence**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.09124_slides.en.pdf?v=cf5c9b77e9a138ba>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.09124_slides.pdf?v=1c1a59cf62ec4af5>) · [arXiv](<https://arxiv.org/abs/2611.09124>) · [Code](<https://github.com/AutoLab-SAI-SJTU/A2MEAS>) · [HF](<https://huggingface.co/papers/2611.09124>) · 53 HF upvotes

<details>
<summary>Summary</summary>

The paper first builds A2-WLA, a strong action model combining "VLA + motion-aware history + implicit world model". When the robot makes an error, the large model MetaBrain together with a diagnostic agent issues correction instructions backed by spatial evidence; this information is encoded into a "correction code" and injected into a frozen action expert through a residual Adapter. At deployment no weights are changed, and the corrective actions are generated directly inside the policy. The system achieves a Q-score of 0.6411 and a full success rate of 45.40% on the 100 public tasks of BEHAVIOR 2026. However, the largest share of the improvement in the overall score comes from the action model itself and from "selecting a model per task"; agentic correction adds only a few more points on top of that.

</details>


**Open-HumanScale: An Open Recipe for Scaling Human and Robot Experience for Embodied Foundation Models**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.06817_slides.en.pdf?v=a9665d1d5dc9e35b>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.06817_slides.pdf?v=fb2fe4ce6fed5bc5>) · [arXiv](<https://arxiv.org/abs/2611.06817>) · [Code](<https://github.com/DAGroup-PKU/HumanNet>) · [HF](<https://huggingface.co/papers/2611.06817>) · 36 HF upvotes

<details>
<summary>Summary</summary>

\*\*The authors curated 50,000 hours of first-person human video with hand-motion and language annotations, and open-sourced all of it. After using it to pre-train a "world–action model" (WAM), the robot's success rate in out-of-distribution scenes rises approximately log-linearly with the number of pre-training hours. Building on this, by further adding 14,600 hours of robot data and switching to goal images to specify tasks, the resulting HumanWAM-Goal achieves an average success rate of 88.65% on RoboTwin 2.0 (SOTA), can also execute tasks zero-shot, and can change its behavior simply by swapping the goal image ("embodied in-context learning").\*\*

</details>


**Embodied First Exam**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.12177_slides.en.pdf?v=d57e5fb69aca0224>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.12177_slides.pdf?v=8b48b7b57dcda5c0>) · [arXiv](<https://arxiv.org/abs/2611.12177>) · [Code](<https://github.com/mll-lab-nu/embodied-first-exam>) · [HF](<https://huggingface.co/papers/2611.12177>) · 26 HF upvotes

<details>
<summary>Summary</summary>

EFE is a unified robotics evaluation framework for general-purpose coding agents (35 suites, 1,156 tasks, 47 robots). Agents can decide for themselves whether to issue commands directly, write control programs, or train policies. The evaluation finds that the strongest agent, GPT-6 Astra (Codex), solves 77% of the core tasks when it has full simulation state and can reset at will. Under real-robot conditions, with only sensors and no resets, it solves only 30%. If the simulation does not wait for it to think (Realtime), the tasks become harder still. The gap comes mainly from "being unable to retry" and from "phases that require precision", not from "being unable to see the exact state".

</details>


**DexForesight: Grounding Dexterous Policies with Implicit Spatial Foresight**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.11166_slides.en.pdf?v=8fd5134a878c36c8>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.11166_slides.pdf?v=080dcb6f2b51a42f>) · [arXiv](<https://arxiv.org/abs/2611.11166>) · Code · [HF](<https://huggingface.co/papers/2611.11166>) · 24 HF upvotes

<details>
<summary>Summary</summary>

During training, the authors use offline depth, kinematic point clouds from the hand URDF, and demonstration actions to train an "action-conditioned" spatial world model that predicts 3D hand point displacements and changes in DINOv3 features. This world model is then frozen, and its query features are distilled into the latent space of a dexterous-hand VLA policy via alignment distillation. At deployment, the policy uses only RGB, language, and proprioceptive state; it needs no depth and does not generate future frames. Results: success rate on 11 simulated DexJoCo tasks rises from 49.4% to 60.5%; on 3 real-robot tasks it reaches 58.3%, versus 50.0% for the strongest baseline, WLA; inference adds only about 3 ms.

</details>


**SWAM: Scaling World Action Models with Cross-Modal Alignment**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.12870_slides.en.pdf?v=79b8b9d478715dfe>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.12870_slides.pdf?v=f2ea2e14f35af9b4>) · [arXiv](<https://arxiv.org/abs/2611.12870>) · [Code](<https://github.com/shaaaaron/SWAM>) · [HF](<https://huggingface.co/papers/2611.12870>) · 23 HF upvotes

<details>
<summary>Summary</summary>

SWAM builds roughly 47,000 hours of multi-source data and systematically studies how a world action model can preserve language-video alignment while learning actions: fine-grained subtask captions, UMI action labels, a 1:1 mix of Ego and UMI data, and an action branch that reads language through video. Together these bring the success rate on RoboTwin randomized scenes to 61.56% and on the real robot to 40%.

</details>


**GTAGym: Real AAA Game Tasks Environment for Evaluation and Reinforcement Learning**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.13028_slides.en.pdf?v=ffd4410668c53562>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.13028_slides.pdf?v=993a02eadedcff6e>) · [arXiv](<https://arxiv.org/abs/2611.13028>) · [Code](<https://github.com/ljbro/GTAGym>) · [HF](<https://huggingface.co/papers/2611.13028>) · 12 HF upvotes

<details>
<summary>Summary</summary>

GTAGym splits the GTA V main-story missions into 150 automatically scorable tasks and provides an RL environment generator. The strongest VLM agent reaches only 70.9% (humans reach 89.8%). Its weak points are closed-loop control tasks such as flying and interception. Small-scale LoRA-GRPO training already brings improvements.

</details>


**Future Representation Distillation for Imagination-free World Action Models**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.04527_slides.en.pdf?v=f8925d0ec0eba795>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.04527_slides.pdf?v=2d5d86f661681aec>) · [arXiv](<https://arxiv.org/abs/2611.04527>) · [Code](<https://github.com/harryjo97/dreamfree>) · [HF](<https://huggingface.co/papers/2611.04527>) · 11 HF upvotes

<details>
<summary>Summary</summary>

DreamFree uses a frozen video diffusion model (which has seen the complete future video) as a teacher and distills its intermediate-layer representations into a video DiT encoder that \*\*only sees the current frame\*\*. This way, the policy needs only a single forward pass to obtain visual features that "foresee the future", which an action DiT then decodes into actions. It retains the predictive capability of the video prior while eliminating the iterative generation of future video: on a 14B backbone it achieves 11Hz closed-loop control, 17.8 times faster than DreamZero; its real-world DROID success rate is 64%, compared with 56% for DreamZero and 16% for π0.5.

</details>


### Last 30 Days


**VFlash: Fast, Accurate Visual Planning via Flash Primitive Decoding**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.08449_slides.en.pdf?v=533e65ad6f97bdce>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.08449_slides.pdf?v=fc535a35f7aedecd>) · [arXiv](<https://arxiv.org/abs/2611.08449>) · [Code](<https://github.com/NVlabs/Eagle>) · [HF](<https://huggingface.co/papers/2611.08449>) · 114 HF upvotes

<details>
<summary>Summary</summary>

VFlash first uses a tool call to declare the type and length of a visual primitive (boxes, 2D/3D trajectories, dense point motion), then has a lightweight block-diffusion drafter output the entire primitive in a single forward pass; as long as the structure is valid, it is accepted directly, without requiring token-by-token agreement with the autoregressive target model. As a result, VLM visual-planning decoding is 12–42× faster on Jetson Thor, DGX Spark, and H100 (2.6–5.2× end-to-end), while the 3D robot trajectory error is actually 18–61% lower than with AR, and a WAM conditioned on its plans raises its average success rate on MolmoSpaces from 62.6% to 70.2%.

</details>


**Learning Heterogeneous Tactile Representation for General Dexterous Manipulation**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.12806_slides.en.pdf?v=9e42455bb2de1665>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.12806_slides.pdf?v=4905926edc535cb1>) · [arXiv](<https://arxiv.org/abs/2611.12806>) · [Code](<https://github.com/Robbyant/lingbot-touch>) · [HF](<https://huggingface.co/papers/2611.12806>) · 101 HF upvotes

<details>
<summary>Summary</summary>

LingBot-Touch unifies three types of tactile sensors into a standard fingertip coordinate frame and uses Tactile-JEPA to pretrain a small encoder on 5,000 hours of data. The encoder is frozen and plug-and-play, raising real-robot success rates of four types of policies by 14-25 points and raising simulated RL success rates from 21% to 69%, and it transfers to new sensors with zero parameters.

</details>


**SLA: Scaling Spatial-Language-Action Model via Continual Pre-training**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.08373_slides.en.pdf?v=d70a0bbc6417546c>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.08373_slides.pdf?v=448e9e6367e2472f>) · [arXiv](<https://arxiv.org/abs/2611.08373>) · [Code](<https://github.com/OpenHelix-Team/Spatial-Forcing>) · [HF](<https://huggingface.co/papers/2611.08373>) · 88 HF upvotes

<details>
<summary>Summary</summary>

SLA starts from π0.5 and performs continual pre-training on about 1.7M heterogeneous robot trajectories: during training, it cosine-aligns the visual tokens from the VLA's intermediate layers with features from the frozen 3D perception model OmniVGGT (using multi-layer gated fusion together with state dropout), and this alignment is kept during the post-training stage as well. At inference, the architecture is exactly the same as π0.5, and neither depth nor camera calibration is required. The method achieves SOTA on LIBERO-Plus, RoboTwin 2.0 (Clean2Random), RoboCasa-Panda, and RoboDojo-Real, and across 8 real-robot conditions its average success rate is 24 percentage points higher than π0.5.

</details>


**Route Anything: A Study of Model and Policy Routing for General-Purpose AI Systems**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.05275_slides.en.pdf?v=16a9228cd6c10605>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.05275_slides.pdf?v=8a2e2622849e53b2>) · [arXiv](<https://arxiv.org/abs/2611.05275>) · [Code](<https://github.com/InfRec-Cardinal/route-anything>) · [HF](<https://huggingface.co/papers/2611.05275>) · 82 HF upvotes

<details>
<summary>Summary</summary>

The authors first build a unified theory of routing (prices, reference models, an information ladder, and certifiable quality floors), then run 452 candidate configurations on the same set of inputs across 25 benchmarks, obtaining 370,000 scored records covering text, images, video, speech, coding agents, and robotics. The conclusion is: \*\*the ceiling for picking the best candidate per input is indeed not low (the oracle is 5.4 points higher than the best fixed candidate), but learned routers capture only a very small portion of this in quality (+0.3 points). The truly reliable gain from routing is that "the cheap route is already good enough": with quality roughly on par, efficiency is on average 8.82 times that of the reference model.\*\*

</details>


**World In-Context Learning for Agentic Robot Manipulation**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.12885_slides.en.pdf?v=41e998cfc4ccf4d7>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.12885_slides.pdf?v=68f4e63330d4b371>) · [arXiv](<https://arxiv.org/abs/2611.12885>) · [Code](<https://github.com/ArcheOne-AI/RoboScript>) · [HF](<https://huggingface.co/papers/2611.12885>) · 66 HF upvotes

<details>
<summary>Summary</summary>

The paper proposes \*\*World In-Context Learning (WICL)\*\*: the foundation model's weights stay frozen, and starting from \*\*a single demonstration\*\*, the task is repeatedly "rehearsed" in a simulator, with the feedback from the world written into a readable, semantic \*\*Task Memory\*\* (rather than into network weights). The agentic system built on this paradigm, \*\*RoboScript\*\*, performs no gradient updates and achieves an average clean/randomized success rate of \*\*83.4%\*\* across all 50 tasks of RoboTwin 2.0. The strongest action policy, trained with 50 demonstrations per task, reaches only 61.7%. Moreover, RoboScript shows almost no drop in randomized scenes, and its memory can also transfer to a real heterogeneous dual-arm robot.

</details>


**From Pixels to Actions - Towards Native Vision-Language-Action Policies**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.06918_slides.en.pdf?v=66ee679282f33d97>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.06918_slides.pdf?v=599bbe7743578d4e>) · [arXiv](<https://arxiv.org/abs/2611.06918>) · [Code](<https://github.com/EvolvingLMMs-Lab/NEO>) · [HF](<https://huggingface.co/papers/2611.06918>) · 60 HF upvotes

<details>
<summary>Summary</summary>

NEO-VLA removes the vision encoder: pixels are patchified via convolution and fed together with language into a 2B native backbone, while an action expert reads the KV layer by layer. It finds that control-critical visual information often peaks in early layers; even with the backbone frozen, it outperforms encoder-based models, reaching 89.7 on LIBERO-plus and 69.4 on RoboTwin with randomization.

</details>


**WorldFoundry: Towards Unified Infrastructure for World Intelligence**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.10771_slides.en.pdf?v=f68cc0cedc3bcb1a>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.10771_slides.pdf?v=f3a47b69aa4b8c58>) · [arXiv](<https://arxiv.org/abs/2611.10771>) · [Code](<https://github.com/OpenEnvision/WorldFoundry>) · [HF](<https://huggingface.co/papers/2611.10771>) · 57 HF upvotes

<details>
<summary>Summary</summary>

The paper first gives an operational, function-level definition of a "generative world model": a world model must maintain a \*\*persistent state\*\* that interventions change and observations correct, and this loop must be closed, rather than judging only whether the frames look realistic. It then releases the open-source infrastructure \*\*WorldFoundry\*\*, which uses a unified manifest, artifact contract, and evidence scorecard to bring 270 models spanning video, 3D/4D, interactive worlds, and embodied action, together with 74 benchmarks and 62 metric entries, into a single reproducible inference and evaluation pipeline.

</details>


**DreamX: Video Diffusion Model is a Universal Latent Action Learner**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.05377_slides.en.pdf?v=1bbb7939410e6f9f>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.05377_slides.pdf?v=3a7e7fc426e80882>) · [arXiv](<https://arxiv.org/abs/2611.05377>) · Code · [HF](<https://huggingface.co/papers/2611.05377>) · 56 HF upvotes

<details>
<summary>Summary</summary>

DreamX uses the pretrained video diffusion model Cosmos-Predict2.5 (2B) \*\*as both the encoder and the decoder\*\*: learnable queries read out latent actions of 4 tokens per latent frame from the backbone's spatiotemporal features (1,200→4, a 300x compression), and then the same backbone reconstructs the future video from only "initial frame + latent actions." In this way, appearance is left to the initial frame and the generative prior to explain, so the latent actions are forced to encode only motion. The resulting latent action space can be shared across humans and robots: on LARYBench it substantially outperforms existing latent action models, it enables human-to-robot video transfer and action transfer without paired data, and it can also serve as the prediction target for lightweight policies, thereby eliminating the step of generating future videos.

</details>


**Toward the Era of Agentic Embodied Intelligence**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.09124_slides.en.pdf?v=cf5c9b77e9a138ba>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.09124_slides.pdf?v=1c1a59cf62ec4af5>) · [arXiv](<https://arxiv.org/abs/2611.09124>) · [Code](<https://github.com/AutoLab-SAI-SJTU/A2MEAS>) · [HF](<https://huggingface.co/papers/2611.09124>) · 53 HF upvotes

<details>
<summary>Summary</summary>

The paper first builds A2-WLA, a strong action model combining "VLA + motion-aware history + implicit world model". When the robot makes an error, the large model MetaBrain together with a diagnostic agent issues correction instructions backed by spatial evidence; this information is encoded into a "correction code" and injected into a frozen action expert through a residual Adapter. At deployment no weights are changed, and the corrective actions are generated directly inside the policy. The system achieves a Q-score of 0.6411 and a full success rate of 45.40% on the 100 public tasks of BEHAVIOR 2026. However, the largest share of the improvement in the overall score comes from the action model itself and from "selecting a model per task"; agentic correction adds only a few more points on top of that.

</details>


**RoboColosseum: Evaluating Physical Intelligence at Scale In-The-Wild**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.02497_slides.en.pdf?v=4a877e8f2942284a>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.02497_slides.pdf?v=4196d06bd5188744>) · [arXiv](<https://arxiv.org/abs/2611.02497>) · [Code](<https://github.com/RoboColosseum/robocolosseum-client>) · [HF](<https://huggingface.co/papers/2611.02497>) · 51 HF upvotes

<details>
<summary>Summary</summary>

RoboColosseum evaluates 8 models in a distributed manner across 124 real-world sites and 4 embodiments: frontier agents can match VLAs zero-shot, but success rates on open-ended tasks are generally extremely low; rankings flip depending on embodiment and track, the G1 humanoid completed no tasks at all, and active pairing can save about half of the trials.

</details>


**Democratizing Robot-Use Agents: A Unified Harness with Open Models**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.01560_slides.en.pdf?v=e4c17a7649d75ef2>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.01560_slides.pdf?v=5903bc133d53b93e>) · [arXiv](<https://arxiv.org/abs/2611.01560>) · [Code](<https://github.com/Open-RUA/uni-robot-agent>) · [HF](<https://huggingface.co/papers/2611.01560>) · 49 HF upvotes

<details>
<summary>Summary</summary>

The paper proposes uni-robot-agent, a unified, modular robot-use agent framework that supports pipelined execution. Without using privileged information such as depth or task-success judges, the open-source Qwen3.8-Flash-Next scores 31.39 on RoboDojo, higher than the officially reported GPT-6 Astra+RoboProbe (28.97), and on 19 real-robot tasks it matches a fine-tuned π0.5. The paper further argues that robot-use ability stems from four general capabilities (visual understanding, spatial grounding, geometric encoding, and embodied reasoning), and that future training should improve all four at the same time.

</details>


**Open-HumanScale: An Open Recipe for Scaling Human and Robot Experience for Embodied Foundation Models**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.06817_slides.en.pdf?v=a9665d1d5dc9e35b>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.06817_slides.pdf?v=fb2fe4ce6fed5bc5>) · [arXiv](<https://arxiv.org/abs/2611.06817>) · [Code](<https://github.com/DAGroup-PKU/HumanNet>) · [HF](<https://huggingface.co/papers/2611.06817>) · 36 HF upvotes

<details>
<summary>Summary</summary>

\*\*The authors curated 50,000 hours of first-person human video with hand-motion and language annotations, and open-sourced all of it. After using it to pre-train a "world–action model" (WAM), the robot's success rate in out-of-distribution scenes rises approximately log-linearly with the number of pre-training hours. Building on this, by further adding 14,600 hours of robot data and switching to goal images to specify tasks, the resulting HumanWAM-Goal achieves an average success rate of 88.65% on RoboTwin 2.0 (SOTA), can also execute tasks zero-shot, and can change its behavior simply by swapping the goal image ("embodied in-context learning").\*\*

</details>


## Monthly Archive


- [November 2026](papers/2026-11.md) — 49 papers

## Contributors

- [Bojun Zou (BojunZou)](https://github.com/BojunZou)
- [Yuanhao Guo (guoyuanhao-git)](https://github.com/guoyuanhao-git)
- [Weihao Yu (yuweihao)](https://github.com/yuweihao)
