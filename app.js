// DATA COLLECTIONS FOR SERVICES, TREATMENTS, AND TESTS
const treatmentsData = {
  ear: [
    { id: "earaches", title: "Earaches & Ear Pain", desc: "Common earaches can be caused by infections, pressure changes, earwax build-up, or referred pain from throat/jaw issues. Comprehensive examination helps rule out deep canal or middle ear infections." },
    { id: "discharge", title: "Ear Discharge (Otorrhea)", desc: "Fluid, pus, or blood draining from the ear can indicate a middle ear infection with a ruptured eardrum, swimmer's ear, or eczema of the canal. Prompt treatment is crucial to preserve hearing." },
    { id: "infections", title: "Ear Infections (Otitis Media/Externa)", desc: "Infections can affect the outer ear canal (swimmer's ear) or the middle ear space behind the eardrum. Treatment ranges from antibiotic drops to surgical clearance in chronic cases." },
    { id: "wax", title: "Earwax Impaction", desc: "Excessive or hardened earwax can cause hearing loss, ringing, or earaches. Safe removal is performed using micro-suctioning or syringing under endoscopic visualization." },
    { id: "rupture", title: "Eardrum Rupture (Perforation)", desc: "A tear or hole in the eardrum can result from trauma, loud noises, or severe middle ear infection. We provide medical evaluation and advanced tympanoplasty (eardrum repair) surgery." },
    { id: "hearing-loss", title: "Hearing Loss & Deafness", desc: "Hearing loss can be conductive (outer/middle ear issues) or sensorineural (nerve damage). We offer complete audiometric evaluation, BERA testing, and advanced digital hearing aid fitment." },
    { id: "tinnitus", title: "Tinnitus (Ringing in the Ears)", desc: "A constant ringing, buzzing, or clicking sound in the ears. Tinnitus can stem from noise exposure, ear blockage, or underlying circulatory/nerve issues. We provide sound therapy, counseling, and medical management." },
    { id: "paediatric-ear", title: "Paediatric Ear Disorders", desc: "Children frequently suffer from fluid in the ears (Otitis Media with Effusion), recurrent infections, and congenital hearing deficits. Early BERA screening helps intervene during critical development phases." },
    { id: "facial-nerve", title: "Facial Nerve Disorders (Bell's Palsy)", desc: "Weakness or paralysis of facial muscles due to nerve inflammation or infection. Prompt corticosteroid therapy, physical rehabilitation, and clinical monitoring are key to full recovery." }
  ],
  nose: [
    { id: "rhinitis", title: "Allergic Rhinitis (Nasal Allergy)", desc: "Frequent sneezing, runny nose, itchy eyes, and nasal congestion triggered by dust, pollen, or pollution. We offer allergy testing, customized sprays, immunotherapy, and lifestyle guidance." },
    { id: "foreign-body-nose", title: "Foreign Objects in the Nose", desc: "Common in toddlers who insert beads, seeds, or small toys in their nostrils. Endoscopic removal is done gently and safely to prevent inhalation into the lungs." },
    { id: "dns", title: "Deviated Nasal Septum (DNS)", desc: "A crooked nasal septum blocks airflow in one or both nostrils, leading to chronic mouth breathing, snoring, and sinus issues. Corrected via minor septoplasty surgery." },
    { id: "epistaxis", title: "Nosebleeds (Epistaxis)", desc: "Bleeding from the nose due to dry air, nose-picking, allergies, high blood pressure, or chemical irritants. Managed via localized pressure, chemical cauterization, or anterior packing." },
    { id: "fracture", title: "Nasal Bone Fracture", desc: "Trauma from sports or accidents can break the nasal bridge. Immediate reduction (alignment) within 7-10 days is required to restore appearance and nasal breathing." },
    { id: "polyps", title: "Nasal Polyps (Antrochoanal & Ethmoidal)", desc: "Non-cancerous, teardrop-shaped growths in the nasal passages or sinuses. They block breathing, dull the sense of smell, and cause infections. Removed via Functional Endoscopic Sinus Surgery (FESS)." },
    { id: "sinusitis", title: "Chronic & Acute Sinusitis", desc: "Inflammation of the sinus cavities causing nasal block, facial pain/pressure, and thick discharge. Managed medically with saline flushes, antibiotics, or endoscopically via FESS for long-term drainage." }
  ],
  throat: [
    { id: "tonsillitis", title: "Recurrent Tonsillitis & Adenoiditis", desc: "Swollen, painful tonsils and adenoids that cause sore throat, painful swallowing, and sleep apnea (snoring in children). Treated medically, or via micro-debrider Coblation Tonsillectomy/Adenoidectomy." },
    { id: "hoarseness", title: "Hoarseness & Voice Changes", desc: "A raspy, strained, or breathy voice caused by vocal strain, acid reflux, smoking, or growths. Laryngoscopy helps visualize the vocal folds to guide speech therapy or microsurgery." },
    { id: "vocal-nodes", title: "Vocal Cord Nodules & Polyps", desc: "Benign calluses on the vocal cords from chronic voice abuse (common in teachers and singers). Primarily managed with specialized speech therapy, or micro-laryngeal surgery." },
    { id: "vocal-palsy", title: "Vocal Cord Paralysis", desc: "Weakness or paralysis of one or both vocal cords causing a weak voice and swallowing difficulties. Treatment includes voice therapy, injections, or surgical medialization." },
    { id: "leukoplakia", title: "Throat Leukoplakia", desc: "White patches on the tongue, gums, or throat lining, often related to tobacco use, which can become precancerous. We perform biopsies, laser excision, and cessation counseling." },
    { id: "dysphagia", title: "Swallowing Difficulties (Dysphagia)", desc: "Difficulty moving food or liquid from the mouth to stomach. Can be caused by throat narrowing, acid reflux, or neurological issues. Evaluated via diagnostic endoscopy." },
    { id: "stridor", title: "Stridor (Noisy Breathing)", desc: "A high-pitched wheezing sound caused by a narrowed airway in the throat or windpipe. A medical emergency in children requiring instant endoscopic assessment." },
    { id: "parotid", title: "Parotid & Salivary Gland Tumours", desc: "Growths in the parotid or submandibular glands that present as painless lumps. Surgical removal (parotidectomy) is performed with facial nerve monitoring to avoid paralysis." },
    { id: "lymphadenopathy", title: "Cervical Lymphadenopathy (Swollen Neck Nodes)", desc: "Enlargement of lymph nodes in the neck due to infections, tuberculosis, or neoplastic changes. We provide diagnostic needle biopsies (FNAC) and medical management." }
  ],
  vertigo: [
    { id: "bppv", title: "BPPV (Benign Paroxysmal Positional Vertigo)", desc: "The most common form of vertigo, triggered by small calcium crystals floating in the inner ear canals. Causes short, intense spinning sensations when turning in bed or looking up. Cured instantly with Canalith Repositioning Maneuvers (Epley's)." },
    { id: "menieres", title: "Meniere's Disease", desc: "An inner ear fluid imbalance causing episodes of severe spinning vertigo, fluctuating hearing loss, tinnitus, and ear fullness. Managed via low-salt diets, diuretics, intratympanic injections, and VNG monitoring." },
    { id: "labyrinthitis", title: "Labyrinthitis & Vestibular Neuritis", desc: "Viral infection of the inner ear or vestibular nerve causing sudden, intense vertigo lasting days, often accompanied by hearing loss (labyrinthitis) or normal hearing (neuritis). Treated with vestibular suppressants and rehabilitation." },
    { id: "migraine-vertigo", title: "Vestibular Migraine", desc: "Vertigo episodes triggered by migraine mechanisms, which may occur without actual headaches. Managed with migraine triggers avoidance, lifestyle changes, and preventative medications." },
    { id: "vestibulopathy", title: "Bilateral Vestibular Dysfunction", desc: "Loss of balance function in both ears, causing unsteadiness in the dark and bouncy vision (oscillopsia) while walking. Rehabilitated via custom vestibular exercises." }
  ]
};

const testsData = [
  { id: "vng", title: "Videonystagmography (VNG)", icon: "fa-video", desc: "The gold standard in vertigo diagnostics. Evaluates inner ear balance function by recording involuntary eye movements (nystagmus) using infrared cameras while stimulating the ears with head movements, visual patterns, or temperature changes (caloric test)." },
  { id: "bera", title: "BERA (Brainstem Auditory Evoked Response)", icon: "fa-baby", desc: "An objective hearing test that measures electrical activity along the hearing nerve to the brain stem in response to sound clicks. Crucial for screening infants for hearing loss, hyperactive children, or diagnosing acoustic nerve tumors." },
  { id: "ecog", title: "Electrocochleography (ECoG)", icon: "fa-wave-square", desc: "A diagnostic test that measures electrical potentials generated in the cochlea of the inner ear in response to sound. Primarily used to diagnose fluid pressure build-up inside the inner ear (Endolymphatic Hydrops / Meniere's Disease)." },
  { id: "vemp", title: "Vestibular Evoked Myogenic Potentials (VEMP)", icon: "fa-running", desc: "Measures muscle responses (in the neck or eye muscles) evoked by loud sounds, reflecting the health of specific chambers of the inner ear (saccule and utricle) and the vestibular nerve. Essential for comprehensive vertigo profiling." },
  { id: "audiometry", title: "Pure Tone Audiometry & Tympanometry", icon: "fa-headphones", desc: "Standard hearing evaluation. Pure tone audiometry tests the quietest sounds you can hear at different pitches, while tympanometry checks the movement of the eardrum and pressure changes in the middle ear." },
  { id: "speech-therapy", title: "Speech & Language Therapy", icon: "fa-comments", desc: "Therapeutic intervention for children with speech delays, autism spectrum, stammering, and adults recovering from stroke or vocal cord nodules. Custom programs designed by certified therapists." }
];

// CLIENT-SIDE ROUTER
const router = {
  routes: ["home", "about", "treatments", "tests", "booking", "assessment", "contact", "tools"],
  defaultRoute: "home",
  
  init() {
    window.addEventListener("hashchange", () => this.handleRouting());
    window.addEventListener("DOMContentLoaded", () => this.handleRouting());
  },
  
  handleRouting() {
    let hash = window.location.hash.replace("#/", "").replace("#", "");
    
    // Check if category is passed inside the treatments hash (e.g. treatments-ear)
    let category = null;
    if (hash.startsWith("treatments-")) {
      category = hash.split("-")[1];
      hash = "treatments";
    }
    
    if (!this.routes.includes(hash)) {
      hash = this.defaultRoute;
      window.location.hash = `#/${hash}`;
      return;
    }
    
    // Stop tinnitus masking noise if navigating away from tools
    if (hash !== "tools" && typeof tinnitusMasker !== "undefined" && tinnitusMasker.isPlaying) {
      tinnitusMasker.stopSound();
    }
    
    // If treatments category was specified, set the active tab
    if (hash === "treatments" && category && typeof explorer !== "undefined") {
      explorer.activeCategory = category;
      // Switch active class in explorer sidebar buttons
      document.querySelectorAll(".explorer-tab-btn").forEach(btn => {
        btn.classList.remove("active");
        if (btn.getAttribute("data-category") === category) {
          btn.classList.add("active");
        }
      });
      // Render the pane
      explorer.renderPane(category);
    }
    
    // Switch active view
    document.querySelectorAll(".view").forEach(view => {
      view.classList.remove("active");
    });
    const activeView = document.getElementById(`${hash}-view`);
    if (activeView) {
      activeView.classList.add("active");
    }
    
    // Switch active nav item in desktop header
    document.querySelectorAll(".main-nav li").forEach(item => {
      item.classList.remove("active");
      const link = item.querySelector("a");
      if (link && (link.getAttribute("href") === `#/${hash}` || link.getAttribute("href").startsWith(`#/${hash}-`))) {
        item.classList.add("active");
      }
    });
    
    // Switch active nav item in mobile dock
    document.querySelectorAll(".mobile-dock-item").forEach(item => {
      item.classList.remove("active");
      if (item.getAttribute("href") === `#/${hash}` || item.getAttribute("href").startsWith(`#/${hash}-`)) {
        item.classList.add("active");
      }
    });
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

// LIVE TIMINGS ENGINE (IST COMPATIBLE)
const timings = {
  // Clinic hours in IST:
  // Mon-Sat: 11:00 AM - 2:00 PM (11:00 - 14:00), 5:00 PM - 9:00 PM (17:00 - 21:00)
  // Sunday: Closed
  checkClinicStatus() {
    // Get current time in Indian Standard Time (IST: UTC + 5:30)
    const d = new Date();
    const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    const istTime = new Date(utc + (3600000 * 5.5));
    
    const day = istTime.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const hours = istTime.getHours();
    const minutes = istTime.getMinutes();
    const timeVal = hours + (minutes / 60); // Float value of time
    
    const statusTextEl = document.getElementById("live-status-text");
    const indicatorEl = document.getElementById("live-status-indicator");
    
    if (!statusTextEl || !indicatorEl) return;
    
    // Reset classes
    indicatorEl.className = "live-indicator";
    
    if (day === 0) {
      // Sunday
      statusTextEl.innerHTML = `Clinic is Closed Today <span style="font-weight:400; font-size:0.85em; display:block; color:var(--text-light)">Opens Monday at 11:00 AM IST</span>`;
      indicatorEl.classList.add("closed");
      return;
    }
    
    // Mon - Sat
    const morningStart = 11.0;
    const morningEnd = 14.0;
    const eveningStart = 17.0;
    const eveningEnd = 21.0;
    
    let isOpen = false;
    let nextStatus = "";
    
    if (timeVal >= morningStart && timeVal < morningEnd) {
      isOpen = true;
      const hoursLeft = Math.floor(morningEnd - timeVal);
      const minsLeft = Math.floor(((morningEnd - timeVal) % 1) * 60);
      nextStatus = `Open Now until 2:00 PM IST <span style="font-weight:400; font-size:0.85em; display:block; color:var(--text-light)">Closing in ${hoursLeft}h ${minsLeft}m</span>`;
    } else if (timeVal >= eveningStart && timeVal < eveningEnd) {
      isOpen = true;
      const hoursLeft = Math.floor(eveningEnd - timeVal);
      const minsLeft = Math.floor(((eveningEnd - timeVal) % 1) * 60);
      nextStatus = `Open Now until 9:00 PM IST <span style="font-weight:400; font-size:0.85em; display:block; color:var(--text-light)">Closing in ${hoursLeft}h ${minsLeft}m</span>`;
    } else {
      isOpen = false;
      if (timeVal < morningStart) {
        nextStatus = `Clinic is Closed <span style="font-weight:400; font-size:0.85em; display:block; color:var(--text-light)">Opens Today at 11:00 AM IST</span>`;
      } else if (timeVal >= morningEnd && timeVal < eveningStart) {
        nextStatus = `Clinic is Closed for Afternoon Break <span style="font-weight:400; font-size:0.85em; display:block; color:var(--text-light)">Opens Today at 5:00 PM IST</span>`;
      } else {
        nextStatus = `Clinic is Closed for the Day <span style="font-weight:400; font-size:0.85em; display:block; color:var(--text-light)">Opens Tomorrow at 11:00 AM IST</span>`;
      }
    }
    
    if (isOpen) {
      indicatorEl.classList.add("open");
      statusTextEl.innerHTML = nextStatus;
    } else {
      indicatorEl.classList.add("closed");
      statusTextEl.innerHTML = nextStatus;
    }
  },
  
  init() {
    this.checkClinicStatus();
    // Refresh status every 30 seconds
    setInterval(() => this.checkClinicStatus(), 30000);
  }
};

// VERTIGO SELF-ASSESSMENT WIZARD
const assessment = {
  currentStep: 0,
  answers: {},
  questions: [
    {
      text: "How would you describe your main dizzy sensation?",
      key: "sensation",
      options: [
        { label: "The room spinning around you, or you spinning around", value: "spinning" },
        { label: "General imbalance, off-balance, or unsteadiness", value: "imbalance" },
        { label: "Fainting feeling or feeling like you might black out", value: "fainting" },
        { label: "Lightheadedness or a floating sensation in the head", value: "lightheaded" }
      ]
    },
    {
      text: "Does the sensation happen when rolling over in bed, bending down, or looking up?",
      key: "movement_trigger",
      options: [
        { label: "Yes, definitely. Turning in bed triggers it instantly", value: "positional_high" },
        { label: "Sometimes, movements make it slightly worse", value: "positional_medium" },
        { label: "No, the sensation is constant regardless of head movements", value: "constant" },
        { label: "No, it is triggered by loud noises or stress", value: "other" }
      ]
    },
    {
      text: "Are you experiencing any hearing changes, ringing (tinnitus), or ear fullness?",
      key: "ear_symptoms",
      options: [
        { label: "Yes, I have hearing loss and/or ringing in one ear", value: "unilateral_ear" },
        { label: "Yes, I have hearing changes/ringing in both ears", value: "bilateral_ear" },
        { label: "No, my hearing is completely unaffected", value: "no_ear" }
      ]
    },
    {
      text: "How long does a typical spinning or dizzy episode last?",
      key: "duration",
      options: [
        { label: "A few seconds to less than a minute", value: "seconds" },
        { label: "Several hours to half a day", value: "hours" },
        { label: "Constant, lasting for days or weeks", value: "days_weeks" },
        { label: "It varies or is just a fleeting lightheadedness", value: "variable" }
      ]
    },
    {
      text: "Do you experience double vision, numbness, or difficulty speaking during the episodes?",
      key: "red_flags",
      options: [
        { label: "Yes, I have experienced these symptoms", value: "yes_red" },
        { label: "No, absolutely none of these", value: "no_red" }
      ]
    }
  ],
  
  init() {
    this.renderQuestion();
    
    const prevBtn = document.getElementById("quiz-prev-btn");
    const nextBtn = document.getElementById("quiz-next-btn");
    
    if (prevBtn) {
      prevBtn.addEventListener("click", () => this.navigate(-1));
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", () => this.navigate(1));
    }
    
    document.getElementById("quiz-reset-btn")?.addEventListener("click", () => this.resetQuiz());
  },
  
  renderQuestion() {
    const quizContentEl = document.getElementById("quiz-question-container");
    if (!quizContentEl) return;
    
    // Clear and build question
    quizContentEl.innerHTML = "";
    
    const q = this.questions[this.currentStep];
    const pane = document.createElement("div");
    pane.className = "assessment-question-pane active";
    
    const title = document.createElement("h4");
    title.className = "assessment-question-text";
    title.innerText = q.text;
    pane.appendChild(title);
    
    const optionsContainer = document.createElement("div");
    optionsContainer.className = "assessment-options";
    
    q.options.forEach(opt => {
      const label = document.createElement("label");
      label.className = "assessment-option-label";
      
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `quiz-${q.key}`;
      input.value = opt.value;
      
      // Check if previously selected
      if (this.answers[q.key] === opt.value) {
        input.checked = true;
        label.classList.add("selected");
      }
      
      input.addEventListener("change", () => {
        // Clear selected class from other options
        optionsContainer.querySelectorAll(".assessment-option-label").forEach(l => l.classList.remove("selected"));
        label.classList.add("selected");
        this.answers[q.key] = opt.value;
        
        // Enable next button
        const nextBtn = document.getElementById("quiz-next-btn");
        if (nextBtn) nextBtn.disabled = false;
      });
      
      const span = document.createElement("span");
      span.innerText = opt.label;
      
      label.appendChild(input);
      label.appendChild(span);
      optionsContainer.appendChild(label);
    });
    
    pane.appendChild(optionsContainer);
    quizContentEl.appendChild(pane);
    
    // Update progress bar
    const progressPercent = ((this.currentStep + 1) / this.questions.length) * 100;
    const progressFillEl = document.getElementById("quiz-progress-fill");
    if (progressFillEl) progressFillEl.style.width = `${progressPercent}%`;
    
    // Update navigation buttons
    const prevBtn = document.getElementById("quiz-prev-btn");
    const nextBtn = document.getElementById("quiz-next-btn");
    
    if (prevBtn) {
      prevBtn.style.visibility = this.currentStep === 0 ? "hidden" : "visible";
    }
    
    if (nextBtn) {
      nextBtn.innerText = this.currentStep === this.questions.length - 1 ? "Get Results" : "Next Question";
      // Disable next button if current question is not answered
      nextBtn.disabled = !this.answers[q.key];
    }
  },
  
  navigate(dir) {
    this.currentStep += dir;
    if (this.currentStep < 0) this.currentStep = 0;
    
    if (this.currentStep >= this.questions.length) {
      // Completed, show results!
      this.showResults();
    } else {
      this.renderQuestion();
    }
  },
  
  showResults() {
    const quizHeader = document.querySelector(".assessment-progress-bar");
    const quizWizard = document.getElementById("quiz-wizard-pane");
    const quizResult = document.getElementById("quiz-result-pane");
    
    if (quizHeader) quizHeader.style.display = "none";
    if (quizWizard) quizWizard.style.display = "none";
    if (quizResult) quizResult.classList.add("active");
    
    // Analyze results
    const ans = this.answers;
    let diagnosisTitle = "General Balance Assessment Needed";
    let diagnosisDesc = "Your symptoms suggest an atypical or mixed balance concern. A detailed otoneurological checkup is advised.";
    let recommendedTests = ["vng", "audiometry"];
    let isRedFlag = ans.red_flags === "yes_red";
    
    if (isRedFlag) {
      diagnosisTitle = "Neurological Evaluation Recommended";
      diagnosisDesc = "You checked 'Yes' to double vision, numbness, or difficulty speaking. These symptoms can be associated with central nervous system issues. You should consult a medical professional immediately.";
      recommendedTests = ["bera", "audiometry"];
    } else if (ans.sensation === "spinning") {
      if (ans.movement_trigger === "positional_high" && ans.duration === "seconds") {
        diagnosisTitle = "Likely Positional Vertigo (BPPV)";
        diagnosisDesc = "A spinning sensation lasting seconds, triggered specifically by head movements (like turning in bed), is highly characteristic of Benign Paroxysmal Positional Vertigo (BPPV). This occurs when calcium crystals drift into the inner ear canal.";
        recommendedTests = ["vng"]; // VNG caloric is standard, plus Epley repositioning maneuver
      } else if (ans.ear_symptoms === "unilateral_ear" && ans.duration === "hours") {
        diagnosisTitle = "Potential Meniere's Disease / Hydrops";
        diagnosisDesc = "Spinning vertigo lasting hours combined with hearing changes, ringing, and a clogged feeling in one ear is a hallmark of Meniere's Disease. This is due to fluid pressure fluctuations in the inner ear.";
        recommendedTests = ["vng", "ecog", "vemp", "audiometry"];
      } else if (ans.duration === "days_weeks") {
        diagnosisTitle = "Potential Labyrinthitis or Vestibular Neuritis";
        diagnosisDesc = "A sudden, intense spinning sensation that lasts constantly for days is typically caused by inflammation of the balance nerve, often following a viral cold. If hearing is also reduced, it may be labyrinthitis.";
        recommendedTests = ["vng", "audiometry", "bera"];
      }
    } else if (ans.sensation === "imbalance") {
      diagnosisTitle = "Chronic Vestibulopathy or Unsteadiness";
      diagnosisDesc = "Feeling off-balance or unsteady (without a violent spinning sensation) can point to bilateral vestibular weakness, age-related balance loss, or structural neck strain. Diagnostic mapping will isolate the root cause.";
      recommendedTests = ["vng", "vemp", "bera", "audiometry"];
    }
    
    // Display result fields
    const resTitleEl = document.getElementById("result-title");
    const resDescEl = document.getElementById("result-desc");
    const resTestsEl = document.getElementById("result-tests-container");
    
    if (resTitleEl) resTitleEl.innerText = diagnosisTitle;
    if (resDescEl) resDescEl.innerHTML = diagnosisDesc + (isRedFlag ? "<br><strong class='text-danger'>Please seek immediate medical attention if these central symptoms are new or sudden.</strong>" : "");
    
    if (resTestsEl) {
      resTestsEl.innerHTML = "";
      recommendedTests.forEach(testId => {
        const testObj = testsData.find(t => t.id === testId);
        if (testObj) {
          const card = document.createElement("div");
          card.className = "assessment-test-card";
          card.innerHTML = `
            <i class="fas ${testObj.icon}"></i>
            <div>
              <h5>${testObj.title}</h5>
              <p>${testObj.desc.split(".")[0]}.</p>
            </div>
          `;
          resTestsEl.appendChild(card);
        }
      });
    }
    
    // Update CTA button to auto-select recommendations in booking wizard
    const bookCta = document.getElementById("quiz-book-cta");
    if (bookCta) {
      bookCta.onclick = () => {
        // Pre-fill service choice based on result
        let selectVal = "general";
        if (recommendedTests.includes("vng")) selectVal = "vng";
        else if (recommendedTests.includes("bera")) selectVal = "bera";
        else if (recommendedTests.includes("audiometry")) selectVal = "hearing";
        
        const serviceSelect = document.getElementById("book-service");
        if (serviceSelect) {
          serviceSelect.value = selectVal;
          // Trigger change event to update the booking summary card
          serviceSelect.dispatchEvent(new Event("change"));
        }
        
        window.location.hash = "#/booking";
      };
    }
  },
  
  resetQuiz() {
    this.currentStep = 0;
    this.answers = {};
    
    const quizHeader = document.querySelector(".assessment-progress-bar");
    const quizWizard = document.getElementById("quiz-wizard-pane");
    const quizResult = document.getElementById("quiz-result-pane");
    
    if (quizHeader) quizHeader.style.display = "block";
    if (quizWizard) quizWizard.style.display = "block";
    if (quizResult) quizResult.classList.remove("active");
    
    this.renderQuestion();
  }
};

// MULTI-STEP BOOKING WIZARD
const booking = {
  currentStep: 1,
  data: {
    service: "general",
    date: "",
    shift: "morning",
    name: "",
    phone: "",
    age: "",
    symptoms: ""
  },
  
  init() {
    this.setupListeners();
    this.updateStepsUI();
    this.updateSummaryCard();
  },
  
  setupListeners() {
    const self = this;
    
    // Service selection change
    const serviceEl = document.getElementById("book-service");
    if (serviceEl) {
      serviceEl.addEventListener("change", (e) => {
        self.data.service = e.target.value;
        self.updateSummaryCard();
      });
    }
    
    // Date selection change
    const dateEl = document.getElementById("book-date");
    if (dateEl) {
      // Prevent past dates
      const today = new Date().toISOString().split("T")[0];
      dateEl.min = today;
      
      dateEl.addEventListener("change", (e) => {
        self.data.date = e.target.value;
        self.updateSummaryCard();
      });
    }
    
    // Shift selection (Grid Card Selection)
    document.querySelectorAll(".booking-grid-select .grid-select-card").forEach(card => {
      card.addEventListener("click", () => {
        document.querySelectorAll(".booking-grid-select .grid-select-card").forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");
        self.data.shift = card.getAttribute("data-value");
        self.updateSummaryCard();
      });
    });
    
    // Inputs in Step 2
    ["book-name", "book-phone", "book-age", "book-symptoms"].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener("input", (e) => {
          const key = id.replace("book-", "");
          self.data[key] = e.target.value;
          self.updateSummaryCard();
        });
      }
    });
    
    // Nav Buttons
    document.getElementById("book-next-1")?.addEventListener("click", () => {
      // Validate date
      if (!self.data.date) {
        alert("Please select a preferred date for the appointment.");
        return;
      }
      self.navigate(1);
    });
    
    document.getElementById("book-prev-2")?.addEventListener("click", () => self.navigate(-1));
    document.getElementById("book-next-2")?.addEventListener("click", () => {
      // Validate contact details
      if (!self.data.name.trim()) { alert("Please enter the patient's name."); return; }
      if (!self.data.phone.trim()) { alert("Please enter a contact mobile number."); return; }
      if (!self.data.age.trim()) { alert("Please enter the patient's age."); return; }
      self.navigate(1);
    });
    
    document.getElementById("book-prev-3")?.addEventListener("click", () => self.navigate(-1));
    document.getElementById("book-submit")?.addEventListener("click", () => self.submitAppointment());
    
    // Reset buttons
    document.getElementById("book-reset")?.addEventListener("click", () => self.resetBooking());
  },
  
  navigate(dir) {
    this.currentStep += dir;
    if (this.currentStep < 1) this.currentStep = 1;
    if (this.currentStep > 3) this.currentStep = 3;
    
    this.updateStepsUI();
  },
  
  updateStepsUI() {
    // Hide all panes
    document.querySelectorAll(".booking-form-pane").forEach(pane => {
      pane.classList.remove("active");
    });
    
    // Show active pane
    document.getElementById(`book-step-pane-${this.currentStep}`)?.classList.add("active");
    
    // Update top indicators
    document.querySelectorAll(".booking-steps .booking-step").forEach((step, idx) => {
      const stepNum = idx + 1;
      step.className = "booking-step";
      
      if (stepNum === this.currentStep) {
        step.classList.add("active");
      } else if (stepNum < this.currentStep) {
        step.classList.add("completed");
      }
    });
  },
  
  updateSummaryCard() {
    // Map service value to label
    const servicesMap = {
      "general": "General ENT Consultation",
      "vng": "Vertigo Evaluation (VNG Test)",
      "hearing": "Hearing Assessment (Audiometry)",
      "bera": "Pediatric/Adult BERA Test",
      "speech": "Speech & Language Therapy Session",
      "sinus": "Sinusitis & Allergy Evaluation"
    };
    
    const serviceLabel = servicesMap[this.data.service] || "General ENT Consultation";
    const dateLabel = this.data.date ? new Date(this.data.date).toLocaleDateString("en-IN", { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }) : "Not Selected";
    const shiftLabel = this.data.shift === "morning" ? "Morning (11:00 AM - 2:00 PM)" : "Evening (5:00 PM - 9:00 PM)";
    
    // Fill text in summary cards (both on Step 2 and Step 3 confirmation)
    document.querySelectorAll(".summary-service").forEach(el => el.innerText = serviceLabel);
    document.querySelectorAll(".summary-date").forEach(el => el.innerText = dateLabel);
    document.querySelectorAll(".summary-shift").forEach(el => el.innerText = shiftLabel);
    
    document.querySelectorAll(".summary-name").forEach(el => el.innerText = this.data.name || "--");
    document.querySelectorAll(".summary-phone").forEach(el => el.innerText = this.data.phone || "--");
    document.querySelectorAll(".summary-age").forEach(el => el.innerText = this.data.age ? `${this.data.age} Years` : "--");
    document.querySelectorAll(".summary-symptoms").forEach(el => el.innerText = this.data.symptoms || "None declared");
  },
  
  submitAppointment() {
    // Compiles information and redirects to WhatsApp API
    const servicesMap = {
      "general": "General ENT Consultation",
      "vng": "Vertigo Evaluation (VNG Test)",
      "hearing": "Hearing Assessment (Audiometry)",
      "bera": "Pediatric/Adult BERA Test",
      "speech": "Speech & Language Therapy Session",
      "sinus": "Sinusitis & Allergy Evaluation"
    };
    
    const clinicNumber = "919967752407"; // Format with country code, no "+" or dashes
    const service = servicesMap[this.data.service] || "General ENT Consultation";
    const formattedDate = new Date(this.data.date).toLocaleDateString("en-IN", { day: '2-digit', month: '2-digit', year: 'numeric' });
    const shift = this.data.shift === "morning" ? "Morning (11:00 AM - 2:00 PM)" : "Evening (5:00 PM - 9:00 PM)";
    
    let message = `Hello Dr. Vaishali Sangole's ENT Clinic,\n\n`;
    message += `I would like to request an appointment via the website Booking Wizard. Here are my details:\n\n`;
    message += `*Patient Name:* ${this.data.name}\n`;
    message += `*Age:* ${this.data.age} Years\n`;
    message += `*Contact Number:* ${this.data.phone}\n`;
    message += `*Requested Service:* ${service}\n`;
    message += `*Preferred Date:* ${formattedDate}\n`;
    message += `*Preferred Shift:* ${shift}\n`;
    if (this.data.symptoms.trim()) {
      message += `*Symptoms/Reason:* ${this.data.symptoms}\n`;
    }
    message += `\nPlease confirm if this slot is available. Thank you!`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${clinicNumber}&text=${encodedMessage}`;
    
    // Open in a new tab
    window.open(whatsappUrl, "_blank");
    
    // Reset booking state
    this.resetBooking();
  },
  
  resetBooking() {
    this.currentStep = 1;
    this.data = {
      service: "general",
      date: "",
      shift: "morning",
      name: "",
      phone: "",
      age: "",
      symptoms: ""
    };
    
    // Clear forms
    const serviceEl = document.getElementById("book-service");
    if (serviceEl) serviceEl.value = "general";
    
    const dateEl = document.getElementById("book-date");
    if (dateEl) dateEl.value = "";
    
    document.querySelectorAll(".booking-grid-select .grid-select-card").forEach((c, idx) => {
      c.classList.remove("selected");
      if (idx === 0) c.classList.add("selected");
    });
    
    ["book-name", "book-phone", "book-age", "book-symptoms"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = "";
    });
    
    this.updateStepsUI();
    this.updateSummaryCard();
  }
};

// TREATMENT DETAILS EXPLORER RENDERING
const explorer = {
  activeCategory: "ear",
  
  init() {
    this.renderTabs();
    this.setupListeners();
  },
  
  setupListeners() {
    const self = this;
    document.querySelectorAll(".explorer-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".explorer-tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        
        const cat = btn.getAttribute("data-category");
        self.activeCategory = cat;
        self.renderPane(cat);
      });
    });
  },
  
  renderTabs() {
    this.renderPane(this.activeCategory);
  },
  
  renderPane(category) {
    const paneEl = document.getElementById("explorer-active-pane");
    if (!paneEl) return;
    
    paneEl.innerHTML = "";
    
    const list = treatmentsData[category] || [];
    const categoryTitles = { ear: "Ear (Otology) Treatments", nose: "Nose (Rhinology) Treatments", throat: "Throat & Larynx Treatments", vertigo: "Vertigo & Otoneurology Treatments" };
    
    const title = document.createElement("h3");
    title.style.marginBottom = "24px";
    title.innerText = categoryTitles[category] || "Treatments";
    paneEl.appendChild(title);
    
    const accordionContainer = document.createElement("div");
    accordionContainer.className = "accordion-container";
    
    list.forEach((item, idx) => {
      const accItem = document.createElement("div");
      accItem.className = `accordion-item ${idx === 0 ? "active" : ""}`;
      
      const accHeader = document.createElement("div");
      accHeader.className = "accordion-header";
      accHeader.innerHTML = `
        <h4>${item.title}</h4>
        <i class="fas fa-chevron-down accordion-icon"></i>
      `;
      
      const accContent = document.createElement("div");
      accContent.className = "accordion-content";
      
      // Calculate content style if active on load
      if (idx === 0) {
        accContent.style.maxHeight = "1000px";
        accContent.style.marginTop = "12px";
      }
      
      accContent.innerHTML = `
        <div class="accordion-content-inner">
          <p>${item.desc}</p>
          <a href="#/booking" class="btn btn-outline btn-sm" style="margin-top: 14px;">Consult Doctor for ${item.title.split(" (")[0]}</a>
        </div>
      `;
      
      accHeader.addEventListener("click", () => {
        const isActive = accItem.classList.contains("active");
        
        // Close all items in this pane
        accordionContainer.querySelectorAll(".accordion-item").forEach(itemEl => {
          itemEl.classList.remove("active");
          itemEl.querySelector(".accordion-content").style.maxHeight = "0";
          itemEl.querySelector(".accordion-content").style.marginTop = "0";
        });
        
        if (!isActive) {
          accItem.classList.add("active");
          accContent.style.maxHeight = "1000px";
          accContent.style.marginTop = "12px";
        }
      });
      
      accItem.appendChild(accHeader);
      accItem.appendChild(accContent);
      accordionContainer.appendChild(accItem);
    });
    
    paneEl.appendChild(accordionContainer);
  }
};

// DIAGNOSTICS TESTS VIEW RENDERING
const diagnostics = {
  init() {
    const container = document.getElementById("tests-grid-container");
    if (!container) return;
    
    container.innerHTML = "";
    
    testsData.forEach(test => {
      const card = document.createElement("div");
      card.className = "treatment-card";
      card.innerHTML = `
        <div class="treatment-card-icon flex-center">
          <i class="fas ${test.icon}"></i>
        </div>
        <h3>${test.title}</h3>
        <p>${test.desc}</p>
        <a href="#/booking" class="btn btn-outline btn-sm" style="margin-top: auto; align-self: flex-start;">Book ${test.title.split(" (")[0]}</a>
      `;
      container.appendChild(card);
    });
  }
};

const tinnitusMasker = {
  audioCtx: null,
  source: null,
  gainNode: null,
  isPlaying: false,
  currentType: "white",
  volume: 0.5,
  
  init() {
    this.setupListeners();
  },
  
  setupListeners() {
    const playBtn = document.getElementById("tinnitus-play-btn");
    const volSlider = document.getElementById("tinnitus-volume");
    const volTxt = document.getElementById("vol-txt");
    
    if (playBtn) {
      playBtn.addEventListener("click", () => this.togglePlayback());
    }
    
    if (volSlider) {
      volSlider.addEventListener("input", (e) => {
        const val = e.target.value;
        this.volume = val / 100;
        if (volTxt) volTxt.innerText = `${val}%`;
        if (this.gainNode) {
          this.gainNode.gain.setValueAtTime(this.volume, this.audioCtx.currentTime);
        }
      });
    }
    
    // Sound signature grid clicks
    ["noise-white", "noise-pink", "noise-brown"].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener("click", () => {
          document.querySelectorAll("#tool-pane-tinnitus .grid-select-card").forEach(c => c.classList.remove("selected"));
          el.classList.add("selected");
          
          const type = id.replace("noise-", "");
          this.currentType = type;
          
          if (this.isPlaying) {
            this.stopSound();
            this.startSound();
          }
        });
      }
    });
  },
  
  togglePlayback() {
    if (this.isPlaying) {
      this.stopSound();
    } else {
      this.startSound();
    }
  },
  
  startSound() {
    try {
      if (!this.audioCtx) {
        this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      
      if (this.audioCtx.state === "suspended") {
        this.audioCtx.resume();
      }
      
      const buffer = this.createNoiseBuffer(this.currentType);
      
      this.source = this.audioCtx.createBufferSource();
      this.source.buffer = buffer;
      this.source.loop = true;
      
      this.gainNode = this.audioCtx.createGain();
      this.gainNode.gain.setValueAtTime(this.volume, this.audioCtx.currentTime);
      
      this.source.connect(this.gainNode);
      this.gainNode.connect(this.audioCtx.destination);
      
      this.source.start(0);
      this.isPlaying = true;
      
      const playBtn = document.getElementById("tinnitus-play-btn");
      if (playBtn) {
        playBtn.innerHTML = `<i class="fas fa-pause"></i> Stop Sound Generator`;
        playBtn.classList.remove("btn-primary");
        playBtn.classList.add("btn-accent");
      }
    } catch(e) {
      console.error("Audio Context failed: ", e);
      alert("Audio engine could not start. Please interact with the page first.");
    }
  },
  
  stopSound() {
    if (this.source) {
      try {
        this.source.stop();
      } catch (e) {}
      this.source.disconnect();
      this.source = null;
    }
    this.isPlaying = false;
    
    const playBtn = document.getElementById("tinnitus-play-btn");
    if (playBtn) {
      playBtn.innerHTML = `<i class="fas fa-play"></i> Start Sound Generator`;
      playBtn.classList.remove("btn-accent");
      playBtn.classList.add("btn-primary");
    }
  },
  
  createNoiseBuffer(type) {
    const sampleRate = this.audioCtx.sampleRate;
    const bufferSize = 2 * sampleRate;
    const buffer = this.audioCtx.createBuffer(1, bufferSize, sampleRate);
    const data = buffer.getChannelData(0);
    
    if (type === "white") {
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
    } else if (type === "pink") {
      let b0, b1, b2, b3, b4, b5, b6;
      b0 = b1 = b2 = b3 = b4 = b5 = b6 = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        data[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
        data[i] *= 0.11;
        b6 = white * 0.115926;
      }
    } else if (type === "brown") {
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        data[i] = (lastOut + (0.02 * white)) / 1.02;
        lastOut = data[i];
        data[i] *= 3.5;
      }
    }
    return buffer;
  }
};

const preTestPrep = {
  data: {
    vng: [
      { time: "48 Hours Before", check: "Stop taking vertigo/dizziness medications, vestibular suppressants, or sedatives (consult Dr. Sangole first)." },
      { time: "48 Hours Before", check: "Avoid all alcohol, beer, wine, or sleep aids." },
      { time: "24 Hours Before", check: "Stop consuming caffeine (no tea, coffee, cola, or chocolate)." },
      { time: "Day of Test", check: "DO NOT apply any makeup, eye creams, mascara, eye-liner, or facial lotions (VNG infrared sensors track pupils and makeup interferes)." },
      { time: "2 Hours Before", check: "Eat a light meal only. Do not consume a heavy lunch or breakfast to prevent mild nausea during caloric rotation testing." }
    ],
    bera: [
      { time: "24 Hours Before", check: "Wash hair thoroughly with shampoo. Do not apply hair oils, gels, sprays, or hair creams afterwards (electrodes need direct contact on scalp and earlobes)." },
      { time: "Night Before", check: "Ensure the patient (especially infants or children) gets 1-2 hours less sleep than usual, so they are sleepy during the BERA procedure." },
      { time: "2 Hours Before", check: "Ensure child is fed and comfortable. BERA tests are highly accurate when the patient is asleep or relaxed." }
    ],
    audiometry: [
      { time: "24 Hours Before", check: "Avoid exposure to loud sounds, factories, machinery, or loud headphones for 16-24 hours prior to the test to prevent temporary auditory fatigue." },
      { time: "Day of Test", check: "Clear any known heavy earwax. Earwax impaction can block sound conduction and skew audiogram thresholds (can be cleared in clinic first)." }
    ]
  },
  
  init() {
    this.renderChecklist("vng");
    this.setupListeners();
  },
  
  setupListeners() {
    const selector = document.getElementById("prep-test-selector");
    if (selector) {
      selector.addEventListener("change", (e) => {
        this.renderChecklist(e.target.value);
      });
    }
    
    const shareBtn = document.getElementById("prep-share-btn");
    if (shareBtn) {
      shareBtn.addEventListener("click", () => this.shareChecklist());
    }
  },
  
  renderChecklist(testType) {
    const container = document.getElementById("prep-timeline-container");
    if (!container) return;
    
    container.innerHTML = "";
    const list = this.data[testType] || [];
    
    list.forEach((item, idx) => {
      const card = document.createElement("div");
      card.style.display = "flex";
      card.style.gap = "16px";
      card.style.alignItems = "flex-start";
      card.style.padding = "16px";
      card.style.backgroundColor = "var(--bg-accent)";
      card.style.border = "1px solid #cbd5e1";
      card.style.borderRadius = "var(--radius-md)";
      card.style.transition = "var(--transition)";
      
      card.innerHTML = `
        <input type="checkbox" id="prep-chk-${idx}" class="prep-checkbox" style="width:20px; height:20px; accent-color:var(--primary); margin-top:2px; cursor:pointer;">
        <div style="flex:1;">
          <span class="badge ${item.time.includes("Day") || item.time.includes("2 Hours") ? "badge-accent" : "badge-primary"}" style="font-size:0.75rem; padding:4px 8px; margin-bottom:6px;">${item.time}</span>
          <p style="font-size:0.9rem; color:#0f172a; font-weight:500; margin:0;">${item.check}</p>
        </div>
      `;
      
      const chk = card.querySelector("input");
      chk.addEventListener("change", () => {
        if (chk.checked) {
          card.style.opacity = "0.6";
          card.style.borderColor = "var(--success)";
        } else {
          card.style.opacity = "1";
          card.style.borderColor = "#cbd5e1";
        }
      });
      
      container.appendChild(card);
    });
  },
  
  shareChecklist() {
    const selector = document.getElementById("prep-test-selector");
    const testType = selector ? selector.value : "vng";
    const testNameMap = { vng: "VNG Balance Test", bera: "BERA Hearing Test", audiometry: "Audiometry Hearing Test" };
    const testName = testNameMap[testType];
    
    const list = this.data[testType] || [];
    let message = `*Pre-Test Preparation Checklist for ${testName}*\n`;
    message += `Dr. Vaishali Sangole's ENT & Vertigo Clinic\n\n`;
    
    list.forEach((item, idx) => {
      const chk = document.getElementById(`prep-chk-${idx}`);
      const isChecked = chk && chk.checked;
      const statusIcon = isChecked ? "✅" : "⬜";
      message += `${statusIcon} *[${item.time}]* ${item.check}\n\n`;
    });
    
    message += `Please follow these guidelines strictly to ensure highly accurate test records. Feel free to call us at +919967752407 if you have questions.`;
    
    const encoded = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, "_blank");
  }
};

const patientTools = {
  init() {
    const tabTinnitus = document.getElementById("tool-tab-tinnitus");
    const tabPrep = document.getElementById("tool-tab-prep");
    const paneTinnitus = document.getElementById("tool-pane-tinnitus");
    const panePrep = document.getElementById("tool-pane-prep");
    
    if (tabTinnitus && tabPrep && paneTinnitus && panePrep) {
      tabTinnitus.addEventListener("click", () => {
        tabTinnitus.classList.add("active");
        tabPrep.classList.remove("active");
        paneTinnitus.style.display = "block";
        panePrep.style.display = "none";
      });
      
      tabPrep.addEventListener("click", () => {
        tabPrep.classList.add("active");
        tabTinnitus.classList.remove("active");
        panePrep.style.display = "block";
        paneTinnitus.style.display = "none";
      });
    }
  }
};

// MAIN INITIALIZER
function initApp() {
  router.init();
  timings.init();
  assessment.init();
  booking.init();
  explorer.init();
  diagnostics.init();
  tinnitusMasker.init();
  preTestPrep.init();
  patientTools.init();
  
  // Mobile nav drawer listener
  const toggleBtn = document.getElementById("menu-toggle-btn");
  const mainNav = document.getElementById("site-main-nav");
  
  if (toggleBtn && mainNav) {
    toggleBtn.addEventListener("click", () => {
      const isVisible = mainNav.style.display === "block";
      mainNav.style.display = isVisible ? "none" : "block";
    });
    
    // Auto-close mobile drawer when any link is clicked
    mainNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
          mainNav.style.display = "none";
        }
      });
    });
  }
  
  // Bind Testimonial Track Slider buttons
  const track = document.querySelector(".testimonials-track");
  if (track) {
    document.getElementById("testi-prev-btn")?.addEventListener("click", () => {
      track.scrollBy({ left: -320, behavior: "smooth" });
    });
    document.getElementById("testi-next-btn")?.addEventListener("click", () => {
      track.scrollBy({ left: 320, behavior: "smooth" });
    });
  }
  
  // Bind CTA buttons in homepage to switch view links
  document.querySelectorAll(".nav-link-booking").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.hash = "#/booking";
    });
  });
  
  document.querySelectorAll(".nav-link-assessment").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.hash = "#/assessment";
    });
  });

  // Bind Theme Switcher Selector
  const themeSelect = document.getElementById("theme-switcher-select");
  if (themeSelect) {
    themeSelect.addEventListener("change", (e) => {
      const selectedTheme = e.target.value;
      if (selectedTheme === "default") {
        document.body.removeAttribute("data-theme");
      } else {
        document.body.setAttribute("data-theme", selectedTheme);
      }
    });
  }
}

window.addEventListener("DOMContentLoaded", initApp);
