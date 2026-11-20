# Embodied AI Daily Papers

Website: [Embodied AI Daily Papers](https://ipplab.github.io/embodied-ai-daily-papers/)

Daily embodied AI papers from Hugging Face, with paper summaries and reading slides.

- **Daily papers:** Browse weekly on the website or by month below; expand a summary to read more.
- **Popular papers:** Papers featured in the last 7 or 30 days, ranked by cumulative Hugging Face upvotes, with up to 12 papers per period.
- **Paper links:** English and Chinese slides, the arXiv paper, author code when available, and the Hugging Face discussion.

## Daily Papers — November 2026


Dates refer to the first Hugging Face daily listing. Each paper appears once in the monthly archive.


### November 20, 2026

**One Prior, Two Dynamics: Repurposing Video Diffusion Transformers for Self-Supervised Latent Action Learning**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.26617_slides.en.pdf?v=8c16f1ac4d7a5949>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.26617_slides.pdf?v=6c8d61b2b6d0fe38>) · [arXiv](<https://arxiv.org/abs/2611.26617>) · [Code](<https://github.com/showlab/O2LaF>) · [HF](<https://huggingface.co/papers/2611.26617>)

<details>
<summary>Summary</summary>

\*\*O²LaF initializes both an inverse dynamics model (IDM) and a forward dynamics model (FDM) from the same pretrained video DiT (Wan2.2-5B), each adapted with LoRA: the IDM is a single-forward-pass encoder with "read-only" action queries, and the FDM is a frame-causal, action-conditioned video generator that jointly predicts the whole clip and is trained with a bias toward high noise. The two are trained end to end through a 32-dimensional Gaussian bottleneck to learn latent actions from unlabeled video. These latent actions achieve new SOTA in few-shot action probing for navigation and manipulation, and can transfer zero-shot to new scenes as well as between humans and robots.\*\*

</details>

**Mind2Act World: A Diagnostic Benchmark for Embodied Mind, Physical Action, and Mind-Action Composition in Robotic Manipulation**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.26444_slides.en.pdf?v=faaad5dc93e3b5d6>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.26444_slides.pdf?v=b4b6f0260c967db1>) · [arXiv](<https://arxiv.org/abs/2611.26444>) · [Code](<https://github.com/Mind2Act/Mind2Act_World>) · [HF](<https://huggingface.co/papers/2611.26444>)

<details>
<summary>Summary</summary>

\*\*Mind2Act World uses 30 bimanual simulated manipulation tasks, divided into three views: "testing only memory/reasoning (Mind)," "testing only precise and timely execution (Act)," and "closed-loop composition of the two (Mind2Act)." It evaluates 3 multimodal agents, 4 VLAs, and 2 WAMs over 56,700 episodes, and attributes a cause to every failed episode. The conclusion: the strongest model, GPT-6 Astra, succeeds 52.7% of the time on Mind and 39.0% on Act, but only 12.0% on Mind2Act, and no end-to-end policy exceeds 3.6% on Mind2Act. In other words, individual capabilities do not automatically compose; moreover, most composition tasks fail at the very first physical manipulation step, never even reaching the stage that actually requires composition.\*\*

</details>

**ZeroVLN: Learning to Navigate without Supervised Fine-Tuning of the VLM Brain**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.26414_slides.en.pdf?v=22bb846c71422654>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.26414_slides.pdf?v=bfcc388f9f9583c7>) · [arXiv](<https://arxiv.org/abs/2611.26414>) · [Code](<https://github.com/hzx122/ZeroVLN>) · [HF](<https://huggingface.co/papers/2611.26414>)

<details>
<summary>Summary</summary>

ZeroVLN has the VLM brain direct an action expert through natural-language tool calls. It supervises the expert with trajectories generated according to the brain's requests and then performs joint reinforcement learning. With zero navigation fine-tuning, it achieves the highest success rate under the same conditions on three VLN-CE benchmarks, while changing only 0.015% of the weights and largely preserving general capabilities.

</details>

**Learning What Actions Change: Action Effect Matching for Dynamics-Faithful World Models**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.25980_slides.en.pdf?v=eec8bba844449265>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.25980_slides.pdf?v=1eb79b39c7bce10b>) · [arXiv](<https://arxiv.org/abs/2611.25980>) · [Code](<https://github.com/alshedivat/al-folio>) · [HF](<https://huggingface.co/papers/2611.25980>)

<details>
<summary>Summary</summary>

The authors have the play policy inject recordable, temporally correlated action noise during execution, and add an auxiliary loss, AFFECT, which requires that the way features in the world model's generated video vary with the noise (i.e., their covariance) match that of the real recordings. This method requires neither repeated executions from the same initial state nor outcome labels, yet it makes video world models more sensitive to small action differences. On DROID, the Pearson correlation between policy success rates inside the world model and on the real robot rises from 0.47 to 0.79, and when used for planning, success rate improves by about 8 percentage points.

</details>

**Accord: Universal Online Metric Localization and Dense Mapping from one Camera and an IMU**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.25279_slides.en.pdf?v=b2005b083bedde44>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.25279_slides.pdf?v=f34d1bd669cace69>) · [arXiv](<https://arxiv.org/abs/2611.25279>) · [Code](<https://github.com/be2rlab/ACCORD>) · [HF](<https://huggingface.co/papers/2611.25279>)

<details>
<summary>Summary</summary>

\*\*Accord adds two layers of scale correction on top of DAVIO's "VIO poses + pose-conditioned DA3 depth" framework: first, it uses sparse points triangulated by VIO to set a metric anchor for each keyframe window; then, using bidirectional dense depth consistency between co-visible images across different windows, it solves for an unsupervised scale correction for each image, suppressing the scale errors of a few percent in the monocular dense map. Running a single configuration on 5 public camera-IMU platforms and self-collected phone/GoPro data, and evaluated under a strict protocol in which "the entire map is placed only according to the system's own trajectory, with no scale fitting," it ranks first in average F@5cm on all four public datasets with scanned ground truth.\*\*

</details>

**Inhabitant: An Agent Framework for Long-Horizon Human-Scene Interaction with Spatial Control and Quantitative Feedback**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.25005_slides.en.pdf?v=eadcb2b9eee824b4>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.25005_slides.pdf?v=ed48f4446a5e37ab>) · [arXiv](<https://arxiv.org/abs/2611.25005>) · Code · [HF](<https://huggingface.co/papers/2611.25005>)

<details>
<summary>Summary</summary>

\*\*Inhabitant is a training-free LLM agent framework: instead of merely writing text or invoking skills, the agent directly authors constraints for the Kimodo motion generator using positions, paths, and poses (spatial control). After execution in a semi-physical simulator, it measures on demand how far the hand is from an object and where the object landed (quantitative feedback), then revises the constraints and retries, committing a motion segment only when the measurements match the intent. The authors test it on Inhabit, their self-built 75-task whole-body household benchmark; with Claude Opus 5.5 it completes 98.7% of the tasks, while the best existing agent driven by the same model achieves only 26.7%.\*\*

</details>

**WAM-Policy: World Action Models with On-Policy Distillation for Quadrupedal Loco-Manipulation**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.24011_slides.en.pdf?v=806a600eebda3788>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.24011_slides.pdf?v=44555ff861c8da68>) · [arXiv](<https://arxiv.org/abs/2611.24011>) · [Code](<https://github.com/AIGeeksGroup/WAM-Policy>) · [HF](<https://huggingface.co/papers/2611.24011>)

<details>
<summary>Summary</summary>

WAM-Policy adapts a world action model pretrained for robotic arms (LingBot-VA) into a language-conditioned policy for a quadruped robot that "walks on three legs and works with one front leg." The approach has two steps. First, it replaces the visual and action interfaces, then uses same-noise on-policy self-distillation to compress sampling to 1 video step + 2 action steps, achieving a 14x speedup with almost no performance drop (77.0% -&gt; 76.7%). Second, it trains expert teachers separately with RL on the hard tasks, then uses task-routed multi-teacher on-policy distillation to merge them back into a single fast student, raising the ten-task success rate to 85.0%.

</details>

**VSpark: Speculative Decoding for Autoregressive Vision-Language-Action Models**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.22666_slides.en.pdf?v=3603be68266f6406>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.22666_slides.pdf?v=f889133bb703cc7e>) · [arXiv](<https://arxiv.org/abs/2611.22666>) · [Code](<https://github.com/suho-yoo/VSpark>) · [HF](<https://huggingface.co/papers/2611.22666>)

<details>
<summary>Summary</summary>

VSpark keeps \*\*strict (lossless) verification\*\* unchanged and exploits the property that "many different tokens encode approximately the same action" on the \*\*draft side\*\*: it performs rollouts with action noise calibrated to the draft error to expand training state coverage, trains the draft via alignment with the target model's hidden features, and reuses continuations the target has already computed on rejected branches in the next round's draft tree. As a result, across 4 autoregressive VLAs using two types of compressed action tokenizers (FAST and VQ) and 4 manipulation benchmarks, it achieves 1.28x-2.10x speedups over token-by-token autoregressive decoding, and outperforms 5 recent speculative decoding methods on all models and benchmarks.

</details>

### November 19, 2026

**HINT-WAM: Hindsight-Informed Training for World Action Models**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.24789_slides.en.pdf?v=ae300e354d290b4c>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.24789_slides.pdf?v=b22ee35555b42d0e>) · [arXiv](<https://arxiv.org/abs/2611.24789>) · [Code](<https://github.com/tuandattt/hintwam_code>) · [HF](<https://huggingface.co/papers/2611.24789>)

<details>
<summary>Summary</summary>

HINT-WAM makes the world action model serve as its own teacher: the teacher sees more than the student, namely the "future frames" (hindsight) in the demonstration video. The student generates actions along its own denoising sampling trajectory and is then aligned with this teacher at the distribution level using an energy score. The whole process requires no rewards, no simulator, and no additional teacher model. In the end, the LIBERO-90 success rate rises from 78.9% with SFT to 85.2%, with less forgetting as well.

</details>

**BiCAT: Bimanual Coordination Action Tokenization**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.23499_slides.en.pdf?v=0f3ee19936383a08>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.23499_slides.pdf?v=d5fa45a5e0cd8be8>) · [arXiv](<https://arxiv.org/abs/2611.23499>) · [Code](<https://github.com/MAGICLAB-NUS/BiCAT>) · [HF](<https://huggingface.co/papers/2611.23499>)

<details>
<summary>Summary</summary>

\*\*BiCAT is a bimanual action tokenizer for autoregressive VLAs. It first mirrors the right arm into the left arm's coordinate convention so that both arms share one encoder and one codebook; it then exchanges information from the other arm using symmetric causal cross-arm attention before quantization and a joint decoder after quantization. On the policy side, prediction is split into two blocks: first the left arm's 8 tokens are produced in parallel, then the right arm's 8 tokens are produced in parallel conditioned on the left arm. On RoboTwin 2.0, its average success rate is 17.6 percentage points higher than the strongest baseline NAC (69.3% vs 51.7%), and each action chunk takes only 40.5 ms; on three real bimanual robots it succeeded 113/150 times, compared with 74/150 for OAT and 25/150 for FAST.\*\*

</details>

### November 18, 2026

**TCP4D: A Unified Tool-Center-Point Tracking and Generation Model for Robot Manipulation**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.23143_slides.en.pdf?v=1c266ec65cac6791>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.23143_slides.pdf?v=fe5428f9433eed61>) · [arXiv](<https://arxiv.org/abs/2611.23143>) · [Code](<https://github.com/Livioni/TCP4D>) · [HF](<https://huggingface.co/papers/2611.23143>)

<details>
<summary>Summary</summary>

TCP4D uses a single feed-forward 4D scene representation to directly regress, from monocular RGB video, the metric-scale SE(3) pose of the end-effector tool center point (TCP) and the gripper opening/closing (Tracker), then samples features along these trajectories and uses a DiT to generate future TCP trajectories as a policy (Generator). As a by-product, it yields a cross-embodiment data augmentation pipeline that does not require state recordings from the source robot: video → TCP trajectory → target-robot IK → erase the original robot and render the new robot.

</details>

**Heave-Ho: Decentralized Long-Horizon Multi-Humanoid Collaboration**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.22275_slides.en.pdf?v=456fb48e4366911e>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.22275_slides.pdf?v=9ca2404b879fdaf0>) · [arXiv](<https://arxiv.org/abs/2611.22275>) · [Code](<https://github.com/heaveho-humanoid/Heave-Ho>) · [HF](<https://huggingface.co/papers/2611.22275>)

<details>
<summary>Summary</summary>

Heave-Ho uses a two-level structure to let multiple humanoid robots cooperatively carry heavy objects under the condition of \*\*no network communication at all between robots\*\*: the low level adds a residual policy shared across robots on top of the frozen humanoid foundation tracking model SONIC, post-trained with MAPPO; at the high level, a fine-tuned Qwen3-VL-2B on the leader robot selects one discrete "team skill" at a time and \*\*speaks it aloud\*\*, the followers recognize it via microphone, and everyone starts executing together on the same coarse time grid. The policy, trained with only two G1 robots, can be deployed directly to teams of 4–10 robots, heterogeneous robots, and teams with human participants. In the real world it succeeded in 92 of 100 trials; in simulation the low-level success rate is 94.4%, while all baselines and ablations reach no more than 28.6%.

</details>

**HubEgo-100K: In-the-Wild Egocentric Video of Skilled Work for Robot Learning**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.21938_slides.en.pdf?v=25b49a36e96139f3>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.21938_slides.pdf?v=f6ca21b7064b51c2>) · [arXiv](<https://arxiv.org/abs/2611.21938>) · [Code](<https://github.com/huggingface/lerobot>) · [HF](<https://huggingface.co/papers/2611.21938>)

<details>
<summary>Summary</summary>

\*\*Hub Labs had 12,227 real practitioners use head-mounted phones to record unscripted skilled labor in their own workshops, construction sites, and homes, producing 10,124 hours of 1080p first-person video with IMU aligned to every frame, along with machine-generated action and language annotations, released openly under CC BY 4.0. The paper's core selling point is "diversity measured along multiple axes": both the number of people and the number of environments are an order of magnitude higher than in existing first-person datasets. However, this version provides only statistical analysis, with no model training experiments to demonstrate that the data actually improves robot policies.\*\*

</details>

**ForceHarness: Turning Force into Action and Physics for Frozen Frontier Models**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.21099_slides.en.pdf?v=04864c1959db9ff1>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.21099_slides.pdf?v=15169b78d6259a17>) · [arXiv](<https://arxiv.org/abs/2611.21099>) · [Code](<https://github.com/showlab/ForceHarness>) · [HF](<https://huggingface.co/papers/2611.21099>)

<details>
<summary>Summary</summary>

ForceHarness adds three layers of "harness" between a frontier multimodal model that is accessible only through API calls with frozen weights and a robotic arm: force calibration, self-terminating force primitives, and physical-quantity translation. The fast force closed loop is handed off to primitives beneath the model, and the model only reads physical quantities with uncertainty estimates (mass, contact height, friction coefficient, insertion depth, etc.). The result is that, without any demonstrations or fine-tuning, frontier models can complete manipulation tasks that can only be accomplished through force: the real-robot zero-shot success rate rises from 3.3% to 90%; on HiddenPhys it matches hand-written expert controllers and clearly outperforms a force-aware policy trained on about 200 demonstrations.

</details>

**PanDWM: Panoramic 4D Driving World Models**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.19857_slides.en.pdf?v=7a04775135c087c4>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.19857_slides.pdf?v=cd8df68f34b56534>) · [arXiv](<https://arxiv.org/abs/2611.19857>) · [Code](<https://github.com/AIGeeksGroup/PanDWM>) · [HF](<https://huggingface.co/papers/2611.19857>)

<details>
<summary>Summary</summary>

PanDWM stitches the six surround-view cameras of nuScenes into a single 360°×33.3° panoramic strip, then uses a 4-step, block-causal diffusion student model trained on its own generated history to predict future panoramic video window by window. In panoramic-space evaluation on Val-150, its FID and FVD are lower than all multi-camera baselines, and it is 8–46 times faster. Afterwards, a feed-forward decoder lifts the generated frames into 3D/4D Gaussian scenes along the calibrated rays of each pixel's original camera, for novel-view rendering.

</details>

**ResWAM: Learning What Changes, Not What Stays, for World-Action Models**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.19559_slides.en.pdf?v=575772709385b534>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.19559_slides.pdf?v=e78aa15a3b8b6be6>) · [arXiv](<https://arxiv.org/abs/2611.19559>) · [Code](<https://github.com/OPTML-Group/ResWAM>) · [HF](<https://huggingface.co/papers/2611.19559>)

<details>
<summary>Summary</summary>

ResWAM no longer has the world-action model predict "what the future frame looks like"; instead, it only predicts "how much changes from now to the future" in the frozen DINOv3 feature space (Δ = Z\_\{t+H\} − Z\_t). It uses a 0.5B dual-branch DiT to jointly generate actions and this visual residual via flow matching, with 2.3B total parameters and no robot pretraining. On LIBERO-Plus (81.1%), RoboTwin 2.0 (93.8%), RoboDojo (9.40%), and real robots (80.0%), its average success rate is the highest, and its training/inference compute and latency (about 92–100 ms) are also the lowest.

</details>

### November 17, 2026

**ScaleVLA: Scaling Vision-Language-Action Models to 552 Billion Parameters**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.21607_slides.en.pdf?v=6fd694d72e6ca8eb>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.21607_slides.pdf?v=b627a50de1e75e34>) · [arXiv](<https://arxiv.org/abs/2611.21607>) · [Code](<https://github.com/GalaxyGeneralRobotics/ScaleVLA>) · [HF](<https://huggingface.co/papers/2611.21607>)

<details>
<summary>Summary</summary>

\*\*ScaleVLA runs only the first half (the causal encoder) of a frozen 552B MoE frontier VLM (DeepSeek-V4.1-Flash) to extract features, and attaches a GR00T-style flow-matching action DiT trained from scratch. In a controlled comparison with the action head, data, and training budget all held fixed, scaling the backbone from 2B to 552B improves sample efficiency (10 demonstrations outperform the 2B model with 50), out-of-distribution generalization (45.1% vs. at most 31.3% on LIBERO-PRO), and fine-grained real-robot insertion (9/10 vs. 4/10), while the median latency per action chunk remains only 216 ms. This shows that frontier VLMs can serve not only as "reasoning agents" but also as the representational foundation for learned robot policies.\*\*

</details>

**SALA: Semantically Aligned Latent Actions Enable Dual-Axis Scaling of Embodied Foundation Models**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.17110_slides.en.pdf?v=a7dc5207fec0f80c>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.17110_slides.pdf?v=951d470d19d50247>) · [arXiv](<https://arxiv.org/abs/2611.17110>) · Code · [HF](<https://huggingface.co/papers/2611.17110>)

<details>
<summary>Summary</summary>

\*\*Using only atomic-action language descriptions of human and robot videos separately (e.g., "grasp the cup"), and without requiring paired data, SALA softly aligns the latent actions of human videos to robot latent actions that have been "anchored with real robot actions." As a result, human videos without action labels can also directly supervise the same VLA policy that controls the robot. Both usages improve as more human video is added: when the general human video used for pretraining increases from 0 to 2,678 hours, robot action prediction error decreases steadily; as more task-specific human demonstrations are used in post-training, the real-robot success rate rises from 53.75% to 72.5%.\*\*

</details>

**Ego Guidance: Enhancing Robot Policy Learning with Action-Free Human Egocentric Videos**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.13685_slides.en.pdf?v=6753244d7330ef70>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.13685_slides.pdf?v=e6c733e69f2030e8>) · [arXiv](<https://arxiv.org/abs/2611.13685>) · [Code](<https://github.com/llong-cs/EgoGuidance>) · [HF](<https://huggingface.co/papers/2611.13685>)

<details>
<summary>Summary</summary>

A generative expert (SPAR) that "predicts the visual features of future frames" is attached in parallel alongside the VLM backbone of a VLA. This way, human egocentric videos without action annotations can also take part in training: they serve only to shape the representations of the shared backbone, and the generative expert is removed at inference time. This approach makes the policy's success rate in out-of-distribution (OOD) scenarios rise steadily with video duration, but the improvement is currently only around 1 point.

</details>

### November 16, 2026

**Gamer: A Generalist Vision-Language-Action Foundation Model for Long-Horizon Real-Time Game Agent**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.18397_slides.en.pdf?v=72b34e92d820f938>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.18397_slides.pdf?v=a361044dd83c084b>) · [arXiv](<https://arxiv.org/abs/2611.18397>) · [Code](<https://github.com/RainBowLuoCS/Gamer>) · [HF](<https://huggingface.co/papers/2611.18397>)

<details>
<summary>Summary</summary>

\*\*Gamer looks only at screen pixels and outputs only native keyboard and mouse actions. It uses a three-stage pipeline of "continued pretraining on cross-game keyboard-and-mouse trajectories -&gt; multi-level instruction fine-tuning with sparse thinking and memory summaries -&gt; temporally aware GRPO online reinforcement learning segmented by memory", together with an in-house low-latency inference engine, Streaming-vLLM (which cuts per-step latency from 1.31 s to 65 ms), to train Qwen3-VL-8B into an agent that can complete long-horizon tasks in real time in Honkai: Star Rail: it reaches milestone accuracies of 80.0% and 83.6% on two held-out side quests and a macro average of 49.7% across 7 categories of mini-games, all clearly higher than the various general-purpose large model baselines.\*\*

</details>

**Envisioning Agentic Robotics: A New Era of Robotic Systems**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.18359_slides.en.pdf?v=96acf31f314ccf09>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.18359_slides.pdf?v=5983062588627d80>) · [arXiv](<https://arxiv.org/abs/2611.18359>) · Code · [HF](<https://huggingface.co/papers/2611.18359>)

<details>
<summary>Summary</summary>

Since GPT-6 Astra, \*\*Embodied System 2\*\*, composed of "foundation model + embodied harness" and used to understand intent, orchestrate skills, and verify results, is replacing "training one policy per task category" as the decision-making core of robots. For this "agentic robotics" paradigm, the paper provides a testable definition, an S2/S1/S0 reference architecture, an evaluation framework with 9 dimensions and 53 sub-dimensions, and a harness card reporting standard, and proposes a "delegable work ladder" of L1 primitives -&gt; L2 tasks -&gt; L3 workflows -&gt; L4 roles as a roadmap. Its core judgment is that the principles of digital agents can transfer to the physical world, but the preconditions that make these principles hold reliably need to be rebuilt in the physical world.

</details>

**HALO: Human-Aligned Data Collection for WhoLe-body MObile Manipulation**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.16439_slides.en.pdf?v=365282ed400c1111>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.16439_slides.pdf?v=f0c59600d10417c4>) · [arXiv](<https://arxiv.org/abs/2611.16439>) · [Code](<https://github.com/robbyant-research/Lingbot-ALOHA>) · [HF](<https://huggingface.co/papers/2611.16439>)

<details>
<summary>Summary</summary>

\*\*For data collection, HALO removes the mobile base and replaces it with a passive cart that a person can easily push around but that has the same motion constraints as the base. The operator stands right next to the real robot arms and grips them directly for kinesthetic teaching, performing bimanual manipulation while walking. After collection, two processing steps follow: the human hands are segmented out of the images and inpainted, and the cart motion is calibrated and time-aligned into velocity commands for the deployment base. Demonstrations collected this way are up to 2.9 times faster than with Mobile ALOHA, with equal or higher success rates. After fine-tuning π0.5, the policy can complete fine-grained tasks such as fastening cable ties, and reaches a 73.3% success rate on six-stage long-horizon mobile manipulation.\*\*

</details>

**Alloy: A Multi-Material Physics Engine for Robot Learning**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.16312_slides.en.pdf?v=cc0630b462f15671>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.16312_slides.pdf?v=d23accda817b771c>) · [arXiv](<https://arxiv.org/abs/2611.16312>) · [Code](<https://github.com/argonrobotics-ai/alloy>) · [HF](<https://huggingface.co/papers/2611.16312>)

<details>
<summary>Summary</summary>

\*\*Alloy is an open-source physics engine for robot learning. It puts multiple material solvers, including MuJoCo Warp, Newton (VBD/MPM), and an in-house SPH solver, into the same scene: each object is automatically assigned to an appropriate solver based on its material, the solvers are coupled within each control step via proxy rigid bodies, and the engine automatically selects the step size. The engine runs thousands of worlds in parallel on a single GPU and assigns each world a health score. It also provides an interface designed specifically for coding agents (documentation bundled with the package, error messages that come with suggested fixes, and an MCP tool server). In a cold-start test, a Claude agent that had never seen Alloy before trained walking, cable-lifting, and water-pouring policies using only a single L4 GPU.\*\*

</details>

**OneSteer: Unlocking Steerable General Humanoid Motion Tracking via One-Step Diffusion Whole-Body Control**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2610.41354_slides.en.pdf?v=df39de6d9f5beebb>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2610.41354_slides.pdf?v=de1105429ef21444>) · [arXiv](<https://arxiv.org/abs/2610.41354>) · Code · [HF](<https://huggingface.co/papers/2610.41354>)

<details>
<summary>Summary</summary>

OneSteer turns a general-purpose motion tracker for humanoid robots into a "one-step diffusion" state-action plan generator: normally, a single forward pass is enough to track any reference motion (with the lowest local error among the methods tested); at deployment, without changing the weights, it simply performs two steps of gradient descent on the generator's \*\*input noise\*\* using a differentiable task cost, and, combined with masking the reference by body-part groups, this lets the same controller, under zero-shot conditions, duck under low bars, step over obstacles, reach for objects, and withstand motor failures. In addition, the dispersion among plans generated from different noise samples can be used to identify in advance motions that are prone to tracking failure, without needing to run a simulation.

</details>

### November 13, 2026

**Ropedia Xperience 2: A Gold Standard for Scaling Physical AI Environments and Behaviors**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.17060_slides.en.pdf?v=15103b6c559553db>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.17060_slides.pdf?v=73cbd680583e07d0>) · [arXiv](<https://arxiv.org/abs/2611.17060>) · [Code](<https://github.com/Ropedia/Ropedia-Xperience-2>) · [HF](<https://huggingface.co/papers/2611.17060>)

<details>
<summary>Summary</summary>

\*\*An operator first scans a real scene with a handheld LiDAR, then puts on the head-mounted camera HOMIE and performs a specified task, and a processing pipeline registers the human video, camera trajectory, and hand/body motions into the same metric-scale scene coordinate frame. In this way, a single on-site capture can serve as a reference for 3D perception benchmarks and can also be converted into simulation environments and robot trajectories. The dataset has released 1,589 scene scans, and the capture inventory contains a further 4,230 recordings (74 tasks, 131 hours). The paper calls this "joint environment + behavior capture" the "gold standard" for physical AI data collection.\*\*

</details>

**EgoX: Egocentric Cross-Embodiment Manipulation with Embodiment Dreaming**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.16728_slides.en.pdf?v=ab2a1fd800010241>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.16728_slides.pdf?v=6f84570fc3b682bf>) · [arXiv](<https://arxiv.org/abs/2611.16728>) · [Code](<https://github.com/egox-dream/egox>) · [HF](<https://huggingface.co/papers/2611.16728>)

<details>
<summary>Summary</summary>

EgoX uniformly decomposes human, real-robot, and simulation demonstrations into semantically aligned modalities such as "image / wrist pose / fingertip keypoints / torso / embodiment-specific joints", and places them all in a single egocentric coordinate frame. The model, MXT+, uses a separate tokenizer for each modality of each embodiment and a separate expert for each action modality, with a shared Transformer backbone in between; during training it adds an "embodiment dreaming" objective used only in the training phase: predicting latent representations of future visual and proprioceptive states. Using this approach, pretraining on mixed data from 7 embodiments (human + 6 robots) and then fine-tuning on the target embodiment raises the average task progress across 13 task-embodiment combinations from 0.63 to 0.80, and from 0.53 to 0.77 under out-of-distribution conditions.

</details>

**JustRUA: A Controlled Study of GPT-6 Robot-Use Agents**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.16009_slides.en.pdf?v=605f939a2eb8697b>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.16009_slides.pdf?v=986b5e992865ccc6>) · [arXiv](<https://arxiv.org/abs/2611.16009>) · [Code](<https://github.com/ZefanW/JustRUA>) · [HF](<https://huggingface.co/papers/2611.16009>)

<details>
<summary>Summary</summary>

On the same testbed and the same 111-episode evaluation set, the authors take apart, one by one, the various designs added to recent GPT-6 Astra "robot-use agent" (RUA) systems and run controlled experiments on each. The result: by keeping only a handful of components (full history, early stopping at 20 steps per action segment, compact gripper readings, depth predicted from RGB alone, and computing 3D coordinates from pixels with code), without any learned policy, self-improvement, or task-specific tuning, the RoboDojo score rises from 29.7 to 50.3. The externally reported "weak precision of GPT-6 Astra" is largely caused by the harness (the surrounding software framework), not by the model itself.

</details>

**BirdDreams: Joint Perspective and BEV Video Generation for a Plausible, Reactive Driving World Model**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.14815_slides.en.pdf?v=e70a278ce699966c>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.14815_slides.pdf?v=31bac8f189992df0>) · [arXiv](<https://arxiv.org/abs/2611.14815>) · Code · [HF](<https://huggingface.co/papers/2611.14815>)

<details>
<summary>Summary</summary>

BirdDreams no longer treats the scene layout (map, surrounding vehicles' trajectories) as an external input, but instead makes it something the model must predict: using two causal video diffusion Transformers coupled through joint attention, it starts from a single front-view image and simultaneously generates a front-view camera video and a metric-scale schematic BEV video, then translates and rotates the latest BEV frame according to the input ego trajectory to serve as the action condition. As a result, the ego trajectory is followed more accurately, and surrounding vehicles can also react more plausibly to counterfactual ego actions.

</details>

**A Cross-Scenario Survey and Analysis of Self-Evolving Multimodal Agents**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.14256_slides.en.pdf?v=1f9839b942b2a65f>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.14256_slides.pdf?v=000a42a057dfd1a6>) · [arXiv](<https://arxiv.org/abs/2611.14256>) · [Code](<https://github.com/jingjing12110/SE-MMAgents>) · [HF](<https://huggingface.co/papers/2611.14256>)

<details>
<summary>Summary</summary>

This is a survey with an analytical framework, covering four scenarios: multimodal reasoning (MR), multimodal generation (MG), GUI/Web navigation (GW), and embodied manipulation (EM). It uniformly decomposes self-evolving multimodal agents into a three-stage loop of "experience generation -&gt; feedback acquisition -&gt; update consolidation", then positions the four scenarios using a positioning matrix of "rollout-count ceiling K̄ × feedback-fidelity ceiling F̄", and frames each self-evolution mechanism as a trade that "borrows some task-structure resource (e.g., outputs that can be checked for equivalence, results that can be verified) to boost a scarce factor". On this basis, the paper structurally explains why the transfer of mechanisms across scenarios is asymmetric: for example, majority voting cannot be carried over to robots, while world models are redundant for reasoning tasks. The paper also provides a set of not-yet-validated, falsifiable portability verdicts, along with a list of the measurements needed to validate them.

</details>

**Learning the Task or Learning the Verifier? Rethinking Criteria Exposure in Embodied Self-Improvement**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.08318_slides.en.pdf?v=bbde2f8937889547>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.08318_slides.pdf?v=561ff1a118dc92d8>) · [arXiv](<https://arxiv.org/abs/2611.08318>) · [Code](<https://github.com/DAGroup-PKU/PyRUA-Lean>) · [HF](<https://huggingface.co/papers/2611.08318>)

<details>
<summary>Summary</summary>

In embodied self-improvement, letting the learner read the benchmark's grading code (Criteria Exposure, CE) yields noticeably higher scores on RoboDojo, but almost all of the extra score comes from hidden rules that are "not stated in the instruction but required by the grading code." When switching to grading criteria that verify only the content of the instruction, this advantage disappears (51.6% vs 27.8% becomes 45.0% vs 47.2%), and it also does not carry over to new tasks. The authors' point is that CE mainly learns the verifier, and learns little about the task itself.

</details>

### November 12, 2026

**FAME-QP: A GPU-Accelerated Quadratic-Programming Solver for Real-Time Model Predictive Control**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.13766_slides.en.pdf?v=b0e390d3e071415b>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.13766_slides.pdf?v=fc52e299fa40e9b6>) · [arXiv](<https://arxiv.org/abs/2611.13766>) · [Code](<https://github.com/santoshrajkumar/fame-qp>) · [HF](<https://huggingface.co/papers/2611.13766>)

<details>
<summary>Summary</summary>

\*\*FAME-QP solves the dense QP obtained after condensing linear MPC. It keeps the framework of ADMM plus a "library of pre-inverted operators" and adds four engineering designs at the GPU execution level: operators tailored to the constraint structure; single-kernel/dual-kernel fused iterations combined with CUDA Graph replay; automatic configuration selection based on device calibration plus measured timing; and probing to select the initial penalty parameter, with lazy operator updates when the matrices change. As a result, on random QPs, random LMPC, Unitree G1 humanoid push recovery, and quadrotor Koopman-MPC, its latency is more than 2-7x lower than that of GPU solvers such as ReLU-QP and CuPIQP, while accuracy and control performance are comparable.\*\*

</details>

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


Snapshot: 2026-11-20 (Asia/Shanghai). Ranked by current cumulative Hugging Face upvotes; updated with the daily publication.


### Last 7 Days


**Gamer: A Generalist Vision-Language-Action Foundation Model for Long-Horizon Real-Time Game Agent**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.18397_slides.en.pdf?v=72b34e92d820f938>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.18397_slides.pdf?v=a361044dd83c084b>) · [arXiv](<https://arxiv.org/abs/2611.18397>) · [Code](<https://github.com/RainBowLuoCS/Gamer>) · [HF](<https://huggingface.co/papers/2611.18397>) · 141 HF upvotes

<details>
<summary>Summary</summary>

\*\*Gamer looks only at screen pixels and outputs only native keyboard and mouse actions. It uses a three-stage pipeline of "continued pretraining on cross-game keyboard-and-mouse trajectories -&gt; multi-level instruction fine-tuning with sparse thinking and memory summaries -&gt; temporally aware GRPO online reinforcement learning segmented by memory", together with an in-house low-latency inference engine, Streaming-vLLM (which cuts per-step latency from 1.31 s to 65 ms), to train Qwen3-VL-8B into an agent that can complete long-horizon tasks in real time in Honkai: Star Rail: it reaches milestone accuracies of 80.0% and 83.6% on two held-out side quests and a macro average of 49.7% across 7 categories of mini-games, all clearly higher than the various general-purpose large model baselines.\*\*

</details>


**Envisioning Agentic Robotics: A New Era of Robotic Systems**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.18359_slides.en.pdf?v=96acf31f314ccf09>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.18359_slides.pdf?v=5983062588627d80>) · [arXiv](<https://arxiv.org/abs/2611.18359>) · Code · [HF](<https://huggingface.co/papers/2611.18359>) · 135 HF upvotes

<details>
<summary>Summary</summary>

Since GPT-6 Astra, \*\*Embodied System 2\*\*, composed of "foundation model + embodied harness" and used to understand intent, orchestrate skills, and verify results, is replacing "training one policy per task category" as the decision-making core of robots. For this "agentic robotics" paradigm, the paper provides a testable definition, an S2/S1/S0 reference architecture, an evaluation framework with 9 dimensions and 53 sub-dimensions, and a harness card reporting standard, and proposes a "delegable work ladder" of L1 primitives -&gt; L2 tasks -&gt; L3 workflows -&gt; L4 roles as a roadmap. Its core judgment is that the principles of digital agents can transfer to the physical world, but the preconditions that make these principles hold reliably need to be rebuilt in the physical world.

</details>


**ForceHarness: Turning Force into Action and Physics for Frozen Frontier Models**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.21099_slides.en.pdf?v=04864c1959db9ff1>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.21099_slides.pdf?v=15169b78d6259a17>) · [arXiv](<https://arxiv.org/abs/2611.21099>) · [Code](<https://github.com/showlab/ForceHarness>) · [HF](<https://huggingface.co/papers/2611.21099>) · 43 HF upvotes

<details>
<summary>Summary</summary>

ForceHarness adds three layers of "harness" between a frontier multimodal model that is accessible only through API calls with frozen weights and a robotic arm: force calibration, self-terminating force primitives, and physical-quantity translation. The fast force closed loop is handed off to primitives beneath the model, and the model only reads physical quantities with uncertainty estimates (mass, contact height, friction coefficient, insertion depth, etc.). The result is that, without any demonstrations or fine-tuning, frontier models can complete manipulation tasks that can only be accomplished through force: the real-robot zero-shot success rate rises from 3.3% to 90%; on HiddenPhys it matches hand-written expert controllers and clearly outperforms a force-aware policy trained on about 200 demonstrations.

</details>


**ScaleVLA: Scaling Vision-Language-Action Models to 552 Billion Parameters**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.21607_slides.en.pdf?v=6fd694d72e6ca8eb>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.21607_slides.pdf?v=b627a50de1e75e34>) · [arXiv](<https://arxiv.org/abs/2611.21607>) · [Code](<https://github.com/GalaxyGeneralRobotics/ScaleVLA>) · [HF](<https://huggingface.co/papers/2611.21607>) · 39 HF upvotes

<details>
<summary>Summary</summary>

\*\*ScaleVLA runs only the first half (the causal encoder) of a frozen 552B MoE frontier VLM (DeepSeek-V4.1-Flash) to extract features, and attaches a GR00T-style flow-matching action DiT trained from scratch. In a controlled comparison with the action head, data, and training budget all held fixed, scaling the backbone from 2B to 552B improves sample efficiency (10 demonstrations outperform the 2B model with 50), out-of-distribution generalization (45.1% vs. at most 31.3% on LIBERO-PRO), and fine-grained real-robot insertion (9/10 vs. 4/10), while the median latency per action chunk remains only 216 ms. This shows that frontier VLMs can serve not only as "reasoning agents" but also as the representational foundation for learned robot policies.\*\*

</details>


**Mind2Act World: A Diagnostic Benchmark for Embodied Mind, Physical Action, and Mind-Action Composition in Robotic Manipulation**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.26444_slides.en.pdf?v=faaad5dc93e3b5d6>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.26444_slides.pdf?v=b4b6f0260c967db1>) · [arXiv](<https://arxiv.org/abs/2611.26444>) · [Code](<https://github.com/Mind2Act/Mind2Act_World>) · [HF](<https://huggingface.co/papers/2611.26444>) · 39 HF upvotes

<details>
<summary>Summary</summary>

\*\*Mind2Act World uses 30 bimanual simulated manipulation tasks, divided into three views: "testing only memory/reasoning (Mind)," "testing only precise and timely execution (Act)," and "closed-loop composition of the two (Mind2Act)." It evaluates 3 multimodal agents, 4 VLAs, and 2 WAMs over 56,700 episodes, and attributes a cause to every failed episode. The conclusion: the strongest model, GPT-6 Astra, succeeds 52.7% of the time on Mind and 39.0% on Act, but only 12.0% on Mind2Act, and no end-to-end policy exceeds 3.6% on Mind2Act. In other words, individual capabilities do not automatically compose; moreover, most composition tasks fail at the very first physical manipulation step, never even reaching the stage that actually requires composition.\*\*

</details>


**TCP4D: A Unified Tool-Center-Point Tracking and Generation Model for Robot Manipulation**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.23143_slides.en.pdf?v=1c266ec65cac6791>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.23143_slides.pdf?v=fe5428f9433eed61>) · [arXiv](<https://arxiv.org/abs/2611.23143>) · [Code](<https://github.com/Livioni/TCP4D>) · [HF](<https://huggingface.co/papers/2611.23143>) · 25 HF upvotes

<details>
<summary>Summary</summary>

TCP4D uses a single feed-forward 4D scene representation to directly regress, from monocular RGB video, the metric-scale SE(3) pose of the end-effector tool center point (TCP) and the gripper opening/closing (Tracker), then samples features along these trajectories and uses a DiT to generate future TCP trajectories as a policy (Generator). As a by-product, it yields a cross-embodiment data augmentation pipeline that does not require state recordings from the source robot: video → TCP trajectory → target-robot IK → erase the original robot and render the new robot.

</details>


**Heave-Ho: Decentralized Long-Horizon Multi-Humanoid Collaboration**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.22275_slides.en.pdf?v=456fb48e4366911e>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.22275_slides.pdf?v=9ca2404b879fdaf0>) · [arXiv](<https://arxiv.org/abs/2611.22275>) · [Code](<https://github.com/heaveho-humanoid/Heave-Ho>) · [HF](<https://huggingface.co/papers/2611.22275>) · 22 HF upvotes

<details>
<summary>Summary</summary>

Heave-Ho uses a two-level structure to let multiple humanoid robots cooperatively carry heavy objects under the condition of \*\*no network communication at all between robots\*\*: the low level adds a residual policy shared across robots on top of the frozen humanoid foundation tracking model SONIC, post-trained with MAPPO; at the high level, a fine-tuned Qwen3-VL-2B on the leader robot selects one discrete "team skill" at a time and \*\*speaks it aloud\*\*, the followers recognize it via microphone, and everyone starts executing together on the same coarse time grid. The policy, trained with only two G1 robots, can be deployed directly to teams of 4–10 robots, heterogeneous robots, and teams with human participants. In the real world it succeeded in 92 of 100 trials; in simulation the low-level success rate is 94.4%, while all baselines and ablations reach no more than 28.6%.

</details>


**HINT-WAM: Hindsight-Informed Training for World Action Models**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.24789_slides.en.pdf?v=ae300e354d290b4c>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.24789_slides.pdf?v=b22ee35555b42d0e>) · [arXiv](<https://arxiv.org/abs/2611.24789>) · [Code](<https://github.com/tuandattt/hintwam_code>) · [HF](<https://huggingface.co/papers/2611.24789>) · 22 HF upvotes

<details>
<summary>Summary</summary>

HINT-WAM makes the world action model serve as its own teacher: the teacher sees more than the student, namely the "future frames" (hindsight) in the demonstration video. The student generates actions along its own denoising sampling trajectory and is then aligned with this teacher at the distribution level using an energy score. The whole process requires no rewards, no simulator, and no additional teacher model. In the end, the LIBERO-90 success rate rises from 78.9% with SFT to 85.2%, with less forgetting as well.

</details>


**ZeroVLN: Learning to Navigate without Supervised Fine-Tuning of the VLM Brain**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.26414_slides.en.pdf?v=22bb846c71422654>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.26414_slides.pdf?v=bfcc388f9f9583c7>) · [arXiv](<https://arxiv.org/abs/2611.26414>) · [Code](<https://github.com/hzx122/ZeroVLN>) · [HF](<https://huggingface.co/papers/2611.26414>) · 17 HF upvotes

<details>
<summary>Summary</summary>

ZeroVLN has the VLM brain direct an action expert through natural-language tool calls. It supervises the expert with trajectories generated according to the brain's requests and then performs joint reinforcement learning. With zero navigation fine-tuning, it achieves the highest success rate under the same conditions on three VLN-CE benchmarks, while changing only 0.015% of the weights and largely preserving general capabilities.

</details>


**SALA: Semantically Aligned Latent Actions Enable Dual-Axis Scaling of Embodied Foundation Models**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.17110_slides.en.pdf?v=a7dc5207fec0f80c>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.17110_slides.pdf?v=951d470d19d50247>) · [arXiv](<https://arxiv.org/abs/2611.17110>) · Code · [HF](<https://huggingface.co/papers/2611.17110>) · 15 HF upvotes

<details>
<summary>Summary</summary>

\*\*Using only atomic-action language descriptions of human and robot videos separately (e.g., "grasp the cup"), and without requiring paired data, SALA softly aligns the latent actions of human videos to robot latent actions that have been "anchored with real robot actions." As a result, human videos without action labels can also directly supervise the same VLA policy that controls the robot. Both usages improve as more human video is added: when the general human video used for pretraining increases from 0 to 2,678 hours, robot action prediction error decreases steadily; as more task-specific human demonstrations are used in post-training, the real-robot success rate rises from 53.75% to 72.5%.\*\*

</details>


**WAM-Policy: World Action Models with On-Policy Distillation for Quadrupedal Loco-Manipulation**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.24011_slides.en.pdf?v=806a600eebda3788>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.24011_slides.pdf?v=44555ff861c8da68>) · [arXiv](<https://arxiv.org/abs/2611.24011>) · [Code](<https://github.com/AIGeeksGroup/WAM-Policy>) · [HF](<https://huggingface.co/papers/2611.24011>) · 14 HF upvotes

<details>
<summary>Summary</summary>

WAM-Policy adapts a world action model pretrained for robotic arms (LingBot-VA) into a language-conditioned policy for a quadruped robot that "walks on three legs and works with one front leg." The approach has two steps. First, it replaces the visual and action interfaces, then uses same-noise on-policy self-distillation to compress sampling to 1 video step + 2 action steps, achieving a 14x speedup with almost no performance drop (77.0% -&gt; 76.7%). Second, it trains expert teachers separately with RL on the hard tasks, then uses task-routed multi-teacher on-policy distillation to merge them back into a single fast student, raising the ten-task success rate to 85.0%.

</details>


**OneSteer: Unlocking Steerable General Humanoid Motion Tracking via One-Step Diffusion Whole-Body Control**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2610.41354_slides.en.pdf?v=df39de6d9f5beebb>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2610.41354_slides.pdf?v=de1105429ef21444>) · [arXiv](<https://arxiv.org/abs/2610.41354>) · Code · [HF](<https://huggingface.co/papers/2610.41354>) · 13 HF upvotes

<details>
<summary>Summary</summary>

OneSteer turns a general-purpose motion tracker for humanoid robots into a "one-step diffusion" state-action plan generator: normally, a single forward pass is enough to track any reference motion (with the lowest local error among the methods tested); at deployment, without changing the weights, it simply performs two steps of gradient descent on the generator's \*\*input noise\*\* using a differentiable task cost, and, combined with masking the reference by body-part groups, this lets the same controller, under zero-shot conditions, duck under low bars, step over obstacles, reach for objects, and withstand motor failures. In addition, the dispersion among plans generated from different noise samples can be used to identify in advance motions that are prone to tracking failure, without needing to run a simulation.

</details>


### Last 30 Days


**Gamer: A Generalist Vision-Language-Action Foundation Model for Long-Horizon Real-Time Game Agent**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.18397_slides.en.pdf?v=72b34e92d820f938>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.18397_slides.pdf?v=a361044dd83c084b>) · [arXiv](<https://arxiv.org/abs/2611.18397>) · [Code](<https://github.com/RainBowLuoCS/Gamer>) · [HF](<https://huggingface.co/papers/2611.18397>) · 141 HF upvotes

<details>
<summary>Summary</summary>

\*\*Gamer looks only at screen pixels and outputs only native keyboard and mouse actions. It uses a three-stage pipeline of "continued pretraining on cross-game keyboard-and-mouse trajectories -&gt; multi-level instruction fine-tuning with sparse thinking and memory summaries -&gt; temporally aware GRPO online reinforcement learning segmented by memory", together with an in-house low-latency inference engine, Streaming-vLLM (which cuts per-step latency from 1.31 s to 65 ms), to train Qwen3-VL-8B into an agent that can complete long-horizon tasks in real time in Honkai: Star Rail: it reaches milestone accuracies of 80.0% and 83.6% on two held-out side quests and a macro average of 49.7% across 7 categories of mini-games, all clearly higher than the various general-purpose large model baselines.\*\*

</details>


**Envisioning Agentic Robotics: A New Era of Robotic Systems**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.18359_slides.en.pdf?v=96acf31f314ccf09>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.18359_slides.pdf?v=5983062588627d80>) · [arXiv](<https://arxiv.org/abs/2611.18359>) · Code · [HF](<https://huggingface.co/papers/2611.18359>) · 135 HF upvotes

<details>
<summary>Summary</summary>

Since GPT-6 Astra, \*\*Embodied System 2\*\*, composed of "foundation model + embodied harness" and used to understand intent, orchestrate skills, and verify results, is replacing "training one policy per task category" as the decision-making core of robots. For this "agentic robotics" paradigm, the paper provides a testable definition, an S2/S1/S0 reference architecture, an evaluation framework with 9 dimensions and 53 sub-dimensions, and a harness card reporting standard, and proposes a "delegable work ladder" of L1 primitives -&gt; L2 tasks -&gt; L3 workflows -&gt; L4 roles as a roadmap. Its core judgment is that the principles of digital agents can transfer to the physical world, but the preconditions that make these principles hold reliably need to be rebuilt in the physical world.

</details>


**VFlash: Fast, Accurate Visual Planning via Flash Primitive Decoding**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.08449_slides.en.pdf?v=533e65ad6f97bdce>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.08449_slides.pdf?v=fc535a35f7aedecd>) · [arXiv](<https://arxiv.org/abs/2611.08449>) · [Code](<https://github.com/NVlabs/Eagle>) · [HF](<https://huggingface.co/papers/2611.08449>) · 121 HF upvotes

<details>
<summary>Summary</summary>

VFlash first uses a tool call to declare the type and length of a visual primitive (boxes, 2D/3D trajectories, dense point motion), then has a lightweight block-diffusion drafter output the entire primitive in a single forward pass; as long as the structure is valid, it is accepted directly, without requiring token-by-token agreement with the autoregressive target model. As a result, VLM visual-planning decoding is 12–42× faster on Jetson Thor, DGX Spark, and H100 (2.6–5.2× end-to-end), while the 3D robot trajectory error is actually 18–61% lower than with AR, and a WAM conditioned on its plans raises its average success rate on MolmoSpaces from 62.6% to 70.2%.

</details>


**Learning Heterogeneous Tactile Representation for General Dexterous Manipulation**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.12806_slides.en.pdf?v=9e42455bb2de1665>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.12806_slides.pdf?v=4905926edc535cb1>) · [arXiv](<https://arxiv.org/abs/2611.12806>) · [Code](<https://github.com/Robbyant/lingbot-touch>) · [HF](<https://huggingface.co/papers/2611.12806>) · 108 HF upvotes

<details>
<summary>Summary</summary>

LingBot-Touch unifies three types of tactile sensors into a standard fingertip coordinate frame and uses Tactile-JEPA to pretrain a small encoder on 5,000 hours of data. The encoder is frozen and plug-and-play, raising real-robot success rates of four types of policies by 14-25 points and raising simulated RL success rates from 21% to 69%, and it transfers to new sensors with zero parameters.

</details>


**From Pixels to Actions - Towards Native Vision-Language-Action Policies**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.06918_slides.en.pdf?v=66ee679282f33d97>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.06918_slides.pdf?v=599bbe7743578d4e>) · [arXiv](<https://arxiv.org/abs/2611.06918>) · [Code](<https://github.com/EvolvingLMMs-Lab/NEO>) · [HF](<https://huggingface.co/papers/2611.06918>) · 59 HF upvotes

<details>
<summary>Summary</summary>

NEO-VLA removes the vision encoder: pixels are patchified via convolution and fed together with language into a 2B native backbone, while an action expert reads the KV layer by layer. It finds that control-critical visual information often peaks in early layers; even with the backbone frozen, it outperforms encoder-based models, reaching 89.7 on LIBERO-plus and 69.4 on RoboTwin with randomization.

</details>


**SLA: Scaling Spatial-Language-Action Model via Continual Pre-training**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.08373_slides.en.pdf?v=d70a0bbc6417546c>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.08373_slides.pdf?v=448e9e6367e2472f>) · [arXiv](<https://arxiv.org/abs/2611.08373>) · [Code](<https://github.com/OpenHelix-Team/Spatial-Forcing>) · [HF](<https://huggingface.co/papers/2611.08373>) · 59 HF upvotes

<details>
<summary>Summary</summary>

SLA starts from π0.5 and performs continual pre-training on about 1.7M heterogeneous robot trajectories: during training, it cosine-aligns the visual tokens from the VLA's intermediate layers with features from the frozen 3D perception model OmniVGGT (using multi-layer gated fusion together with state dropout), and this alignment is kept during the post-training stage as well. At inference, the architecture is exactly the same as π0.5, and neither depth nor camera calibration is required. The method achieves SOTA on LIBERO-Plus, RoboTwin 2.0 (Clean2Random), RoboCasa-Panda, and RoboDojo-Real, and across 8 real-robot conditions its average success rate is 24 percentage points higher than π0.5.

</details>


**DreamX: Video Diffusion Model is a Universal Latent Action Learner**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.05377_slides.en.pdf?v=1bbb7939410e6f9f>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.05377_slides.pdf?v=3a7e7fc426e80882>) · [arXiv](<https://arxiv.org/abs/2611.05377>) · Code · [HF](<https://huggingface.co/papers/2611.05377>) · 57 HF upvotes

<details>
<summary>Summary</summary>

DreamX uses the pretrained video diffusion model Cosmos-Predict2.5 (2B) \*\*as both the encoder and the decoder\*\*: learnable queries read out latent actions of 4 tokens per latent frame from the backbone's spatiotemporal features (1,200→4, a 300x compression), and then the same backbone reconstructs the future video from only "initial frame + latent actions." In this way, appearance is left to the initial frame and the generative prior to explain, so the latent actions are forced to encode only motion. The resulting latent action space can be shared across humans and robots: on LARYBench it substantially outperforms existing latent action models, it enables human-to-robot video transfer and action transfer without paired data, and it can also serve as the prediction target for lightweight policies, thereby eliminating the step of generating future videos.

</details>


**BirdDreams: Joint Perspective and BEV Video Generation for a Plausible, Reactive Driving World Model**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.14815_slides.en.pdf?v=e70a278ce699966c>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.14815_slides.pdf?v=31bac8f189992df0>) · [arXiv](<https://arxiv.org/abs/2611.14815>) · Code · [HF](<https://huggingface.co/papers/2611.14815>) · 56 HF upvotes

<details>
<summary>Summary</summary>

BirdDreams no longer treats the scene layout (map, surrounding vehicles' trajectories) as an external input, but instead makes it something the model must predict: using two causal video diffusion Transformers coupled through joint attention, it starts from a single front-view image and simultaneously generates a front-view camera video and a metric-scale schematic BEV video, then translates and rotates the latest BEV frame according to the input ego trajectory to serve as the action condition. As a result, the ego trajectory is followed more accurately, and surrounding vehicles can also react more plausibly to counterfactual ego actions.

</details>


**WorldFoundry: Towards Unified Infrastructure for World Intelligence**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.10771_slides.en.pdf?v=f68cc0cedc3bcb1a>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.10771_slides.pdf?v=f3a47b69aa4b8c58>) · [arXiv](<https://arxiv.org/abs/2611.10771>) · [Code](<https://github.com/OpenEnvision/WorldFoundry>) · [HF](<https://huggingface.co/papers/2611.10771>) · 55 HF upvotes

<details>
<summary>Summary</summary>

The paper first gives an operational, function-level definition of a "generative world model": a world model must maintain a \*\*persistent state\*\* that interventions change and observations correct, and this loop must be closed, rather than judging only whether the frames look realistic. It then releases the open-source infrastructure \*\*WorldFoundry\*\*, which uses a unified manifest, artifact contract, and evidence scorecard to bring 270 models spanning video, 3D/4D, interactive worlds, and embodied action, together with 74 benchmarks and 62 metric entries, into a single reproducible inference and evaluation pipeline.

</details>


**World In-Context Learning for Agentic Robot Manipulation**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.12885_slides.en.pdf?v=41e998cfc4ccf4d7>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.12885_slides.pdf?v=68f4e63330d4b371>) · [arXiv](<https://arxiv.org/abs/2611.12885>) · [Code](<https://github.com/ArcheOne-AI/RoboScript>) · [HF](<https://huggingface.co/papers/2611.12885>) · 55 HF upvotes

<details>
<summary>Summary</summary>

The paper proposes \*\*World In-Context Learning (WICL)\*\*: the foundation model's weights stay frozen, and starting from \*\*a single demonstration\*\*, the task is repeatedly "rehearsed" in a simulator, with the feedback from the world written into a readable, semantic \*\*Task Memory\*\* (rather than into network weights). The agentic system built on this paradigm, \*\*RoboScript\*\*, performs no gradient updates and achieves an average clean/randomized success rate of \*\*83.4%\*\* across all 50 tasks of RoboTwin 2.0. The strongest action policy, trained with 50 demonstrations per task, reaches only 61.7%. Moreover, RoboScript shows almost no drop in randomized scenes, and its memory can also transfer to a real heterogeneous dual-arm robot.

</details>


**Toward the Era of Agentic Embodied Intelligence**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.09124_slides.en.pdf?v=cf5c9b77e9a138ba>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.09124_slides.pdf?v=1c1a59cf62ec4af5>) · [arXiv](<https://arxiv.org/abs/2611.09124>) · [Code](<https://github.com/AutoLab-SAI-SJTU/A2MEAS>) · [HF](<https://huggingface.co/papers/2611.09124>) · 54 HF upvotes

<details>
<summary>Summary</summary>

The paper first builds A2-WLA, a strong action model combining "VLA + motion-aware history + implicit world model". When the robot makes an error, the large model MetaBrain together with a diagnostic agent issues correction instructions backed by spatial evidence; this information is encoded into a "correction code" and injected into a frozen action expert through a residual Adapter. At deployment no weights are changed, and the corrective actions are generated directly inside the policy. The system achieves a Q-score of 0.6411 and a full success rate of 45.40% on the 100 public tasks of BEHAVIOR 2026. However, the largest share of the improvement in the overall score comes from the action model itself and from "selecting a model per task"; agentic correction adds only a few more points on top of that.

</details>


**RoboColosseum: Evaluating Physical Intelligence at Scale In-The-Wild**  
[Slides (EN)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.02497_slides.en.pdf?v=4a877e8f2942284a>) · [Slides (ZH)](<https://bjipppp.github.io/paper-pdfs-2026-11/pdfs/2611.02497_slides.pdf?v=4196d06bd5188744>) · [arXiv](<https://arxiv.org/abs/2611.02497>) · [Code](<https://github.com/RoboColosseum/robocolosseum-client>) · [HF](<https://huggingface.co/papers/2611.02497>) · 53 HF upvotes

<details>
<summary>Summary</summary>

RoboColosseum evaluates 8 models in a distributed manner across 124 real-world sites and 4 embodiments: frontier agents can match VLAs zero-shot, but success rates on open-ended tasks are generally extremely low; rankings flip depending on embodiment and track, the G1 humanoid completed no tasks at all, and active pairing can save about half of the trials.

</details>


## Monthly Archive


- [November 2026](papers/2026-11.md) — 80 papers

## Contributors

- [Bojun Zou (BojunZou)](https://github.com/BojunZou)
- [Yuanhao Guo (guoyuanhao-git)](https://github.com/guoyuanhao-git)
- [Weihao Yu (yuweihao)](https://github.com/yuweihao)
