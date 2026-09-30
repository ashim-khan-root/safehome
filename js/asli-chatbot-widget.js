(function () {
  const defaults = {
    companyName: "AsliElectronics",
    companyColor: "#1a5632",
    companyColorLight: "#2a7a48",
    whatsappNumber: "+97477418754",
    phoneNumber: "+974 7741 8754",
    email: "info@aslielectronics.com",
    baseUrl: "https://aslielectronics.com",
    welcomeMessage: "👋 Welcome to AsliElectronics! I'm your AI assistant. Ask me about our security cameras, networking gear, audio systems, smart home products, or anything else.",
    botName: "AsliElectronics",
    apiEndpoint: "/api/lead",
    accessKey: "",
  }
  const CONFIG = Object.assign({}, defaults, window.ASLI_CHATBOT_CONFIG || {})

  const LANGS = {
    en: { name: "English", dir: "ltr", flag: "🇬🇧" },
    ar: { name: "العربية", dir: "rtl", flag: "🇶🇦" },
  }

  const TRANS = {
    en: {
      botName: CONFIG.botName,
      welcome: CONFIG.welcomeMessage,
      welcomeFollowUp: "I can help you find products, check prices, or answer questions. What are you looking for?",
      online: "Online — We reply in minutes",
      inputPlaceholder: "Ask about products...",
      selectLanguage: "Choose your language / اختر لغتك",
      productsHere: "Here are some products you might be interested in:",
      clickDetails: "Click any product to see full details! Or tell me more about what you need.",
      hereAre: "Here are our",
      viewDetails: "Click to view details, or let me know what you're looking for!",
      greeting: "👋 Hello! Welcome to AsliElectronics. How can I help you today?",
      thanks: "😊 You're welcome! Let me know if you need anything else.",
      bye: "👋 Thank you! Visit aslielectronics.com anytime or contact us on WhatsApp. Have a great day!",
      whatWeSell: "🏢 We sell authentic security, networking, audio, smart home, and cable products in Qatar. Browse our full catalog at aslielectronics.com",
      deals: "🎉 We regularly offer competitive pricing on our products. Contact us on WhatsApp for current deals and bulk pricing!",
      askAnything: "Ask something else",
      browseProducts: "📦 Browse products",
      chatWhatsApp: "💬 Chat on WhatsApp",
      talkToUs: "📞 Talk to us",
      requestCall: "📞 Request a call",
      yesContact: "Yes, contact me",
      securityCameras: "📹 Security cameras",
      networking: "🌐 Networking",
      audioSystems: "🔊 Audio systems",
      smartHome: "🏠 Smart home",
      leadAlready: "We already have your details! Our team will contact you soon. Anything else?",
      leadSure: "Sure! Let me get your details and someone will reach out.",
      leadThank: "Thank you",
      leadWillContact: "Our team will contact you on WhatsApp at",
      leadWithin: "within a few hours. 🎯",
      leadBrowse: "In the meantime, browse our catalog at aslielectronics.com or ask me anything!",
      leadConnect: "Let me connect you with a real person who can help!",
      leadWantDetails: "Want to leave your details?",
      formName: "Full name",
      formPhone: "Phone (WhatsApp)",
      formEmail: "Email",
      formInterest: "Interested in",
      formMessage: "Message",
      formSubmit: "Send Inquiry",
      formRequired: "Please fill in your name and phone number.",
      formOpt: "(optional)",
      interestCameras: "Security Cameras",
      interestNetworking: "Networking",
      interestAudio: "Audio / PA Systems",
      interestSmart: "Smart Home",
      interestCables: "Cables & Accessories",
      interestInstall: "Installation Service",
      interestWholesale: "Wholesale / Bulk",
      interestOther: "Other",
      whatsappBtn: "Chat on WhatsApp",
      catSecurity: "Security Surveillance",
      catNetworking: "Networking",
      catAudio: "Audio",
      catSmart: "Smart Home",
      catCable: "Cable",
      productCategories: {
        "Security Surveillance": "Security Cameras",
        "Networking": "Networking",
        "Audio": "Audio",
        "Smart Home": "Smart Home",
        "Cable": "Cables",
      },
      kb: {
        security: "📹 We carry a wide range of security & surveillance products:\n\n• IP Cameras — 2MP to 12MP, indoor/outdoor\n• PTZ Cameras — Auto-tracking, weatherproof\n• WiFi Cameras — 250 QAR, easy setup\n• 4G Solar Cameras — Off-grid, always-on\n• NVRs / DVRs — 4CH to 16CH, up to 4K\n• Accessories — Brackets, junction boxes, cables\n\nAll products are MOI-compliant and weatherproof for Qatar's climate.",
        networking: "🌐 Our networking range:\n\n• PoE Switches — 4 to 24 port, 65W to 300W\n• WiFi 6 Access Points — AX1800 / AX3000\n• 4G LTE Routers — SIM-ready, 600Mbps\n• Network Cabinets — 4U to 42U, SPCC steel\n• Cables — Cat6 bare copper & CCA, patch panels\n\nReliable networking for home, office, and enterprise.",
        audio: "🔊 Professional audio & PA systems:\n\n• PA Amplifiers — 150W to 880W, with mic/Bluetooth\n• Ceiling Speakers — 10W to 20W, Bluetooth options\n• Wall Speakers — For indoor & outdoor\n• Volume Controllers — Zone control\n• Full PA Systems — For mosques, schools, malls, offices",
        smart_home: "🏠 Smart home solutions:\n\n• Smart Switches — 1/2/3/4 gang, WiFi/Tuya\n• Video Doorphones — 10-inch WiFi, IP65 rated\n• Smart Video Doorbells — HD, two-way audio\n• Smart Door Locks — Fingerprint, PIN, keyless\n• Gate Locks — Weatherproof, secure\n• Smart Plugs & IR Controllers",
        cable: "🔌 Cables & accessories:\n\n• Cat6 Network Cable — Bare copper & CCA options\n• Coaxial Cable — RG59, RG59+2C, RG6\n• HDMI 2.0 Cables — 1.5m to 20m\n• Patch Panels — Cat6, 24-port\n• Faceplates & Sockets — UK standard\n• HDMI Extenders — Up to 30m over Cat6",
        moiqatar: "🇶🇦 All our security cameras are compliant with Qatar standards. For MOI approval requirements, we recommend consulting with a licensed security systems integrator in Qatar.",
        delivery: "🚚 We deliver across Qatar. Most orders are processed within 24 hours. Delivery typically takes 1-3 business days depending on your location in Doha or other cities.",
        payment: "💳 Payment options: Cash on delivery, bank transfer, or card. Contact us for details on installment plans for bulk orders.",
        warranty: "✅ All products come with manufacturer warranty. If you receive a defective item, contact us within 7 days for a replacement. Specific warranty periods vary by product category.",
        support: "🛠️ We provide technical support for all our products. Call us at " + CONFIG.phoneNumber + " or message us on WhatsApp for installation guidance and troubleshooting.",
        installation: "🔧 We offer professional installation services across Doha, Al Khor, Al Rayyan, Messaid, and Education City. Services include CCTV, PA systems, network cabling, and smart home setup. Contact us for a quote.",
        wholesale: "🏢 We supply contractors, system integrators, and businesses across Qatar. Bulk pricing available for volume orders. Contact us at info@aslielectronics.com for a wholesale quotation.",
        contact: "📞 " + CONFIG.phoneNumber + "\n✉️ " + CONFIG.email + "\n📍 Salwa Road, Doha, Qatar\n🕐 Sun-Thu 8AM-6PM, Sat 9AM-2PM\n💬 WhatsApp: wa.me/" + CONFIG.whatsappNumber,
        about: "🏢 AsliElectronics is Qatar's trusted source for authentic security, networking, audio, and smart home solutions. We offer genuine products, competitive pricing, fast delivery across Qatar, local support, and easy WhatsApp ordering.",
        hours: "🕐 Business hours:\n• Sunday — Thursday: 8AM — 6PM\n• Friday: Closed\n• Saturday: 9AM — 2PM\n\nWhatsApp orders: 24/7",
      },
    },
    ar: {
      botName: "أصلي إلكترونكس",
      welcome: "👋 مرحباً بك في أصلي إلكترونكس! أنا مساعدك الذكي. اسألني عن كاميرات المراقبة، معدات الشبكات، أنظمة الصوت، منتجات المنزل الذكي، أو أي شيء آخر.",
      welcomeFollowUp: "يمكنني مساعدتك في العثور على المنتجات، معرفة الأسعار، أو الإجابة على أسئلتك. ما الذي تبحث عنه؟",
      online: "متصل — نرد في دقائق",
      inputPlaceholder: "اسأل عن المنتجات...",
      selectLanguage: "اختر لغتك / Choose your language",
      productsHere: "إليك بعض المنتجات التي قد تهمك:",
      clickDetails: "اضغط على أي منتج لرؤية التفاصيل! أو أخبرني أكثر عن ما تحتاجه.",
      hereAre: "إليك",
      viewDetails: "اضغط للتفاصيل، أو أخبرني عما تبحث عنه!",
      greeting: "👋 مرحباً! أهلاً بك في أصلي إلكترونكس. كيف يمكنني مساعدتك اليوم؟",
      thanks: "😊 على الرحب والسعة! أخبرني إن احتجت أي شيء آخر.",
      bye: "👋 شكراً لك! زر aslielectronics.com في أي وقت أو تواصل معنا على واتساب. نتمنى لك يوماً سعيداً!",
      whatWeSell: "🏢 نبيع منتجات أصلية في قطر: كاميرات مراقبة، معدات شبكات، أنظمة صوت، منزل ذكي، وكابلات. تصفح كامل الكتالوج على aslielectronics.com",
      deals: "🎉 نقدم أسعاراً تنافسية على جميع منتجاتنا. تواصل معنا على واتساب للعروض الحالية وأسعار الجملة!",
      askAnything: "اسأل شيئاً آخر",
      browseProducts: "📦 تصفح المنتجات",
      chatWhatsApp: "💬 محادثة واتساب",
      talkToUs: "📞 تحدث معنا",
      requestCall: "📞 طلب اتصال",
      yesContact: "نعم، تواصل معي",
      securityCameras: "📹 كاميرات مراقبة",
      networking: "🌐 شبكات",
      audioSystems: "🔊 أنظمة صوت",
      smartHome: "🏠 منزل ذكي",
      leadAlready: "لدينا بياناتك بالفعل! سيتواصل معك فريقنا قريباً. هل هناك شيء آخر؟",
      leadSure: "بالتأكيد! دعني أحصل على بياناتك وسيتواصل معك أحد فريقنا.",
      leadThank: "شكراً لك",
      leadWillContact: "سيتواصل معك فريقنا على واتساب على الرقم",
      leadWithin: "خلال ساعات قليلة. 🎯",
      leadBrowse: "في هذه الأثناء، تصفح كتالوجنا على aslielectronics.com أو اسألني أي شيء!",
      leadConnect: "دعني أوصلك مع أحد فريقنا للمساعدة!",
      leadWantDetails: "هل تود ترك بياناتك؟",
      formName: "الاسم الكامل",
      formPhone: "رقم الهاتف (واتساب)",
      formEmail: "البريد الإلكتروني",
      formInterest: "المهتم به",
      formMessage: "الرسالة",
      formSubmit: "إرسال الاستفسار",
      formRequired: "يرجى إدخال الاسم ورقم الهاتف.",
      formOpt: "(اختياري)",
      interestCameras: "كاميرات مراقبة",
      interestNetworking: "شبكات",
      interestAudio: "أنظمة صوت",
      interestSmart: "منزل ذكي",
      interestCables: "كابلات وملحقات",
      interestInstall: "خدمات التركيب",
      interestWholesale: "جملة",
      interestOther: "أخرى",
      whatsappBtn: "محادثة واتساب",
      catSecurity: "كاميرات مراقبة",
      catNetworking: "شبكات",
      catAudio: "صوت",
      catSmart: "منزل ذكي",
      catCable: "كابلات",
      productCategories: {
        "Security Surveillance": "كاميرات المراقبة",
        "Networking": "الشبكات",
        "Audio": "الصوت",
        "Smart Home": "المنزل الذكي",
        "Cable": "الكابلات",
      },
      kb: {
        security: "📹 لدينا مجموعة واسعة من منتجات المراقبة:\n\n• كاميرات IP — من 2MP إلى 12MP، داخلية/خارجية\n• كاميرات PTZ — تتبع تلقائي، مقاومة للطقس\n• كاميرات WiFi — 250 ريال، سهلة التركيب\n• كاميرات 4G شمسية — بدون اتصال، تشغيل دائم\n• أجهزة تسجيل NVR/DVR — من 4 إلى 16 قناة، حتى 4K\n• ملحقات — أغطية، صناديق توصيل، كابلات\n\nجميع المنتجات متوافقة مع معايير وزارة الداخلية ومناسبة لمناخ قطر.",
        networking: "🌐 مجموعة الشبكات:\n\n• سويتشات PoE — من 4 إلى 24 منفذ، 65W إلى 300W\n• نقاط وصول WiFi 6 — AX1800 / AX3000\n• راوترات 4G LTE — مع شريحة، 600Mbps\n• خزائن شبكات — من 4U إلى 42U\n• كابلات — Cat6 نحاس أصلي وCCA\n\nشبكات موثوقة للمنزل والمكتب والشركات.",
        audio: "🔊 أنظمة صوت احترافية:\n\n• مضخمات صوت — من 150W إلى 880W\n• سماعات سقفية — من 10W إلى 20W\n• سماعات حائطية — داخلية وخارجية\n• أنظمة PA كاملة — للمساجد والمدارس والمكاتب",
        smart_home: "🏠 حلول المنزل الذكي:\n\n• مفاتيح ذكية — 1/2/3/4 قناة، WiFi/Tuya\n• مسافات فيديو — 10 بوصة، WiFi، IP65\n• أجراس فيديو ذكية — HD، صوت ثنائي\n• أقفال ذكية — بصمة، رمز، بدون مفتاح\n• أقفال بوابات — مقاومة للطقس",
        cable: "🔌 الكابلات والملحقات:\n\n• كابل شبكة Cat6 — نحاس أصلي وCCA\n• كابل محوري — RG59، RG59+2C، RG6\n• كابلات HDMI 2.0 — من 1.5m إلى 20m\n• لوحات توصيل — Cat6، 24 منفذ\n• مقابس الحائط — قياس بريطاني\n• موسعات HDMI — حتى 30m عبر Cat6",
        moiqatar: "🇶🇦 جميع كاميراتنا متوافقة مع معايير دولة قطر. لمتطلبات اعتماد وزارة الداخلية، نوصي باستشارة أحد موزعي أنظمة الأمن المرخصين في قطر.",
        delivery: "🚚 نوصل في جميع أنحاء قطر. معظم الطلبات تتم معالجتها خلال 24 ساعة. التوصيل عادة يستغرق 1-3 أيام عمل حسب موقعك في الدوحة أو المدن الأخرى.",
        payment: "💳 طرق الدفع: الدفع عند الاستلام، تحويل بنكي، أو بطاقة. اتصل بنا لتفاصيل خطط التقسيط للطلبات الكبيرة.",
        warranty: "✅ جميع المنتجات تأتي مع ضمان المصنع. إذا استلمت منتجاً معيباً، اتصل بنا خلال 7 أيام للاستبدال. فترات الضمان تختلف حسب فئة المنتج.",
        support: "🛠️ نقدم دعماً فنياً لجميع منتجاتنا. اتصل بنا على " + CONFIG.phoneNumber + " أو راسلنا على واتساب للإرشاد الفني.",
        installation: "🔧 نقدم خدمات تركيب احترافية في الدوحة، الخور، الريان، مسيعيد، ومدينة التعليم. تشمل كاميرات المراقبة، أنظمة الصوت، كابلات الشبكات، وأنظمة المنزل الذكي. اتصل بنا لعرض سعر.",
        wholesale: "🏢 نورد للمقاولين وشركات التكامل في جميع أنحاء قطر. أسعار جملة متاحة للطلبات الكبيرة. راسلنا على info@aslielectronics.com لعرض سعر جملة.",
        contact: "📞 " + CONFIG.phoneNumber + "\n✉️ " + CONFIG.email + "\n📍 طريق سلوى، الدوحة، قطر\n🕐 أحد-خميس 8ص-6م، سبت 9ص-2م\n💬 واتساب: wa.me/" + CONFIG.whatsappNumber,
        about: "🏢 أصلي إلكترونكس هو مصدر قطر الموثوق للحلول الأصلية في الأمن والشبكات والصوت والمنزل الذكي. نقدم منتجات أصلية، أسعار تنافسية، توصيل سريع في جميع أنحاء قطر، ودعم محلي.",
        hours: "🕐 ساعات العمل:\n• الأحد — الخميس: 8صباحاً — 6مساءً\n• الجمعة: مغلق\n• السبت: 9صباحاً — 2مساءً\n\nطلبات واتساب: 24/7",
      },
    },
  }

  const PRODUCTS = [
    { title: { en: "12MP IP Camera", ar: "كاميرا IP 12 ميجابكسل" }, slug: "secuview-12mp-weatherproof-outdoor-ip-camera-smart-detection-onvif", price: 750, category: "Security Surveillance" },
    { title: { en: "8MP Outdoor IP Camera", ar: "كاميرا IP خارجية 8 ميجابكسل" }, slug: "secuview-8mp-full-hd-outdoor-ip-camera-water-proof-onvif", price: 850, category: "Security Surveillance" },
    { title: { en: "6MP Outdoor IP Camera", ar: "كاميرا IP خارجية 6 ميجابكسل" }, slug: "secuview-6mp-fixed-lens-outdoor-ip-camera-auto-tracking-onvif", price: 234, category: "Security Surveillance" },
    { title: { en: "6MP IP PTZ Camera", ar: "كاميرا PTZ IP 6 ميجابكسل" }, slug: "secuview-6mp-outdoor-ip-ptz-camera-auto-focus-lens-weatherproof", price: 850, category: "Security Surveillance" },
    { title: { en: "WiFi Outdoor Camera", ar: "كاميرا خارجية WiFi" }, slug: "secuview-wifi-outdoor-weatherproof-security-camera", price: 250, category: "Security Surveillance" },
    { title: { en: "4G Solar Security Camera", ar: "كاميرا أمنية 4G شمسية" }, slug: "secuview-wireless-ip-outdoor-solar-powered-4g-security-camera", price: 449, category: "Security Surveillance" },
    { title: { en: "16CH 4K Hybrid NVR", ar: "مسجل NVR هجين 16 قناة 4K" }, slug: "secuview-16ch-4k-hybrid-nvr-i-poe-built-in-onvif-support", price: 1274, category: "Security Surveillance" },
    { title: { en: "8CH 4K NVR", ar: "مسجل NVR 8 قناة 4K" }, slug: "secuview-8ch-4k-nvr-ultra-hd-onvif-support-high-speed-performance", price: 760.5, category: "Security Surveillance" },
    { title: { en: "4CH Professional DVR", ar: "مسجل DVR احترافي 4 قنوات" }, slug: "secuview-4ch-professional-dvr-with-4k-n-output", price: 208, category: "Security Surveillance" },
    { title: { en: "10-Inch WiFi Smart Doorphone", ar: "مسافة فيديو ذكية WiFi 10 بوصة" }, slug: "secuview-10-inch-wifi-smart-video-doorphone", price: 1277, category: "Smart Home" },
    { title: { en: "WiFi Smart Doorphone IP65", ar: "مسافة فيديو ذكية WiFi IP65" }, slug: "secuview-full-hd-wi-fi-smart-doorphone-with-waterproof-rate-ip65", price: 500, category: "Smart Home" },
    { title: { en: "Smart Video Doorbell", ar: "جرس فيديو ذكي" }, slug: "secuview-ip-smart-video-doorbell-for-home-automation", price: 876, category: "Smart Home" },
    { title: { en: "Fingerprint Smart Door Lock", ar: "قفل باب ذكي بالبصمة" }, slug: "secuview-keyless-entry-smart-door-lock-with-fingerprint", price: 750, category: "Smart Home" },
    { title: { en: "Smart Gate Lock", ar: "قفل بوابة ذكي مقاوم للطقس" }, slug: "secuview-waterproof-smart-courtyard-gate-lock", price: 1300, category: "Smart Home" },
    { title: { en: "1 Gang WiFi Smart Switch", ar: "مفتاح ذكي WiFi 1 قناة" }, slug: "secuview-one-gang-wi-fi-remote-control-smart-switch-with-metal-border", price: 110, category: "Smart Home" },
    { title: { en: "4 Gang Smart Switch", ar: "مفتاح ذكي 4 قنوات" }, slug: "secuview-four-gang-wi-fi-remote-control-smart-switch-with-metal-border", price: 165, category: "Smart Home" },
    { title: { en: "16-Port Gigabit PoE Switch 300W", ar: "سويش PoE 16 منفذ 300W" }, slug: "secuview-16-port-gigabit-poe-switch-300w", price: 450, category: "Networking" },
    { title: { en: "24-Port Gigabit PoE Switch", ar: "سويش PoE 24 منفذ" }, slug: "secuview-24-port-gigabit-poe-switch-fast-reliable-network-with-2-uplink-2-sfp", price: 750, category: "Networking" },
    { title: { en: "8-Port PoE Switch 120W", ar: "سويش PoE 8 منافذ 120W" }, slug: "secuview-120w-8-port-poe-switch-2-uplink-ports-10-100mbps-operation", price: 182, category: "Networking" },
    { title: { en: "4-Port PoE Gigabit Switch", ar: "سويش PoE 4 منافذ" }, slug: "secuview-4-port-poe-gigabit-switch-with-uplink-sfp-port", price: 210, category: "Networking" },
    { title: { en: "AX1800 WiFi 6 Access Point", ar: "نقطة وصول WiFi 6 AX1800" }, slug: "secuview-ax1800-wi-fi-6-dualband-access-point", price: 299, category: "Networking" },
    { title: { en: "AX3000 Access Point", ar: "نقطة وصول AX3000" }, slug: "secuview-high-performance-ax-3000mbps-wireless-access-point", price: 390, category: "Networking" },
    { title: { en: "4G LTE WiFi Router", ar: "راوتر 4G LTE" }, slug: "secuview-4g-lte-wifi-router-sim-600mbps", price: 240.5, category: "Networking" },
    { title: { en: "1200Mbps Access Point", ar: "نقطة وصول 1200Mbps" }, slug: "secuview-1200mbps-dual-band-wireless-access-point", price: 270, category: "Networking" },
    { title: { en: "150W PA Amplifier", ar: "مضخم صوت 150W" }, slug: "150w-pa-amplifier-secuview", price: 1150, category: "Audio" },
    { title: { en: "280W PA Amplifier", ar: "مضخم صوت 280W" }, slug: "secuview-280w-public-address-amplifier-with-clear-sound", price: 1450, category: "Audio" },
    { title: { en: "480W PA 4-Zone Amplifier", ar: "مضخم صوت 480W 4 مناطق" }, slug: "secuview-480w-public-address-amplifier-with-4-zones", price: 1730, category: "Audio" },
    { title: { en: "880W PA Amplifier", ar: "مضخم صوت 880W" }, slug: "secuview-880w-high-power-public-address-amplifier-for-larger-spaces", price: 2150, category: "Audio" },
    { title: { en: "20W Bluetooth Ceiling Speaker", ar: "سماعة سقف بلوتوث 20W" }, slug: "20w-bluetooth-ceiling-speakers-secuview", price: 550, category: "Audio" },
    { title: { en: "PA Ceiling Speaker", ar: "سماعة سقف PA" }, slug: "secuview-public-address-ceiling-speaker-with-high-quality-sound", price: 105, category: "Audio" },
    { title: { en: "Cat6 Bare Copper Cable", ar: "كابل Cat6 نحاس أصلي" }, slug: "secuview-bare-copper-23awg-cat6-network-cable", price: 450, category: "Cable" },
    { title: { en: "Cat6 Copper Coated Cable", ar: "كابل Cat6 مطلي بالنحاس" }, slug: "secuview-copper-coated-23awg-cat6-network-cable", price: 201, category: "Cable" },
    { title: { en: "4U Network Cabinet", ar: "خزانة شبكات 4U" }, slug: "19-inch-international-standard-4u-spcc-network-cabinet", price: 210, category: "Networking" },
    { title: { en: "42U Network Cabinet", ar: "خزانة شبكات 42U" }, slug: "secuview-international-standard-42u-spcc-network-cabinet", price: 2349, category: "Networking" },
  ]

  const CATEGORY_PAGES = {
    "Security Surveillance": "security-surveillance",
    "Networking": "networking",
    "Audio": "audio",
    "Smart Home": "smart-home",
    "Cable": "cable",
  }

  const RELATED = {
    cameras: ["nvr", "switches", "cables"],
    nvr: ["cameras", "hard drives", "installation"],
    doorphone: ["doorlock", "smart home", "intercom"],
    doorlock: ["doorphone", "smart home", "access control"],
    switch: ["router", "access point", "cables"],
    router: ["switch", "access point", "networking"],
    amplifier: ["speaker", "audio", "pa system"],
    speaker: ["amplifier", "audio", "pa system"],
    smartswitch: ["smart home", "automation", "wifi"],
    cable: ["switch", "camera", "installation"],
    installation: ["camera", "switch", "cable"],
    about: ["products", "contact", "delivery"],
    contact: ["about", "whatsapp", "support"],
  }

  const KB = {
    categories: {
      security: {
        keywords: ["security", "surveillance", "cctv", "camera", "cameras", "dvr", "nvr", "ip camera", "security camera"],
        altKeywords: ["security cameras", "surveillance camera", "cctv system", "security system", "video surveillance"],
        answerKey: "security",
      },
      networking: {
        keywords: ["networking", "network", "switch", "poe", "router", "wifi", "access point", "ap", "cabinet", "rack"],
        altKeywords: ["network switch", "poe switch", "wifi router", "access points", "network cabinet", "server rack"],
        answerKey: "networking",
      },
      audio: {
        keywords: ["audio", "pa system", "amplifier", "speaker", "public address", "sound", "microphone", "ceiling speaker"],
        altKeywords: ["pa amplifier", "public address system", "audio system", "sound system", "ceiling speakers", "bluetooth speaker"],
        answerKey: "audio",
      },
      smart_home: {
        keywords: ["smart home", "smart switch", "door lock", "doorphone", "doorbell", "video doorphone", "automation", "tuya"],
        altKeywords: ["smart home products", "home automation", "smart locks", "smart switches", "video doorphone", "fingerprint lock", "wifi switch"],
        answerKey: "smart_home",
      },
      cable: {
        keywords: ["cable", "cabling", "cat6", "coaxial", "hdmi", "patch panel", "faceplate", "rg59"],
        altKeywords: ["network cable", "cat6 cable", "coaxial cable", "hdmi cable", "structured cabling"],
        answerKey: "cable",
      },
    },
    faq: {
      moiqatar: {
        keywords: ["moi", "qatar compliance", "qatar law", "security approval", "government"],
        altKeywords: ["moi approval", "ministry interior", "qatar regulation", "security compliance"],
        answerKey: "moiqatar",
      },
      delivery: {
        keywords: ["delivery", "shipping", "lead time", "how long", "when", "arrive"],
        altKeywords: ["delivery time", "shipping cost", "how fast", "same day", "next day"],
        answerKey: "delivery",
      },
      payment: {
        keywords: ["payment", "pay", "cash", "card", "bank transfer", "installment"],
        altKeywords: ["how to pay", "payment method", "pay online", "what payment"],
        answerKey: "payment",
      },
      warranty: {
        keywords: ["warranty", "guarantee", "return", "refund", "exchange"],
        altKeywords: ["warranty period", "product warranty", "replacement", "defective"],
        answerKey: "warranty",
      },
      support: {
        keywords: ["support", "help", "technical", "install", "setup help", "guidance"],
        altKeywords: ["technical support", "need help", "installation guide", "how to install", "product support"],
        answerKey: "support",
      },
      installation: {
        keywords: ["installation service", "professional install", "technician", "on site", "setup service"],
        altKeywords: ["install service", "professional installation", "cctv installation", "network installation", "audio installation"],
        answerKey: "installation",
      },
      wholesale: {
        keywords: ["wholesale", "bulk", "bulk order", "quantity", "volume", "trade", "business"],
        altKeywords: ["bulk pricing", "wholesale price", "large order", "business account", "contractor"],
        answerKey: "wholesale",
      },
      contact: {
        keywords: ["contact", "phone", "call", "reach", "email", "talk"],
        altKeywords: ["get in touch", "speak to", "message us", "how to contact", "phone number"],
        answerKey: "contact",
      },
      about: {
        keywords: ["about", "company", "who", "asli", "electronics", "story"],
        altKeywords: ["about aslielectronics", "your company", "tell me about", "background", "history"],
        answerKey: "about",
      },
      hours: {
        keywords: ["hours", "open", "timing", "time", "when open", "business hours", "weekend"],
        altKeywords: ["working hours", "opening hours", "shop hours", "sunday", "friday"],
        answerKey: "hours",
      },
    },
  }

  let LANG = "en"
  const LANG_STORAGE_KEY = "asli_chatbot_lang"

  function t(key) {
    const keys = key.split(".")
    let val = TRANS[LANG]
    for (const k of keys) {
      if (val && val[k] !== undefined) val = val[k]
      else return TRANS["en"].kb[key] || key
    }
    return val
  }

  function pt(product) {
    return product.title[LANG] || product.title.en
  }

  function detectLanguage() {
    const stored = localStorage.getItem(LANG_STORAGE_KEY)
    if (stored && TRANS[stored]) return stored
    const browserLang = (navigator.language || navigator.userLanguage || "").slice(0, 2)
    if (browserLang === "ar") return "ar"
    return "en"
  }

  function setLanguage(lang, body) {
    if (!TRANS[lang]) return
    LANG = lang
    localStorage.setItem(LANG_STORAGE_KEY, lang)
    document.documentElement.dir = LANGS[lang].dir
    if (body) {
      body.innerHTML = ""
      STATE.messages = []
      STATE.askCount = 0
      STATE.lastTopic = null
      showLanguageScreen(body)
    }
  }

  function tKey(keyFn) {
    return keyFn(LANG)
  }

  const getProductsByCategory = (cat) => PRODUCTS.filter(p => p.category === cat).slice(0, 6)
  const getProductsByKeyword = (query) => {
    const q = query.toLowerCase()
    const keywords = {
      camera: ["Security Surveillance"],
      cctv: ["Security Surveillance"],
      security: ["Security Surveillance"],
      surveillance: ["Security Surveillance"],
      nvr: ["Security Surveillance"],
      dvr: ["Security Surveillance"],
      doorphone: ["Smart Home"],
      doorbell: ["Smart Home"],
      door: ["Smart Home"],
      lock: ["Smart Home"],
      fingerprint: ["Smart Home"],
      switch: ["Networking", "Smart Home"],
      poe: ["Networking"],
      router: ["Networking"],
      wifi: ["Networking", "Smart Home"],
      access: ["Networking"],
      cabinet: ["Networking"],
      rack: ["Networking"],
      amplifier: ["Audio"],
      speaker: ["Audio"],
      pa: ["Audio"],
      audio: ["Audio"],
      sound: ["Audio"],
      microphone: ["Audio"],
      cable: ["Cable"],
      cat6: ["Cable"],
      coaxial: ["Cable"],
      hdmi: ["Cable"],
      smart: ["Smart Home", "Security Surveillance"],
      home: ["Smart Home"],
      كاميرا: ["Security Surveillance"],
      كاميرات: ["Security Surveillance"],
      مراقبة: ["Security Surveillance"],
      شبكة: ["Networking"],
      شبكات: ["Networking"],
      راوتر: ["Networking"],
      سويتش: ["Networking"],
      صوت: ["Audio"],
      سماعة: ["Audio"],
      سماعات: ["Audio"],
      مكبر: ["Audio"],
      ذكي: ["Smart Home"],
      منزل: ["Smart Home"],
      قفل: ["Smart Home"],
      باب: ["Smart Home"],
      كابل: ["Cable"],
      كابلات: ["Cable"],
    }
    for (const [word, cats] of Object.entries(keywords)) {
      if (q.includes(word)) return getProductsByCategory(cats[0])
    }
    return []
  }

  // --- render helpers ---

  function addProductCards(body, products, title) {
    const wrapper = document.createElement("div")
    wrapper.style.cssText = "animation:amanFadeIn 0.3s ease;margin:4px 0;"
    if (title) {
      const tEl = document.createElement("div")
      tEl.style.cssText = "font-size:13px;font-weight:600;color:#5a5a7a;padding:6px 0 4px;"
      tEl.textContent = title
      wrapper.appendChild(tEl)
    }
    const grid = document.createElement("div")
    grid.style.cssText = "display:flex;flex-direction:column;gap:6px;"
    const baseUrl = CONFIG.baseUrl
    for (const p of products) {
      const card = document.createElement("a")
      card.href = `${baseUrl}/products/${p.slug}/`
      card.target = "_blank"
      card.style.cssText = "display:flex;justify-content:space-between;align-items:center;background:#f8f9fc;border:1px solid #e8e8f0;border-radius:10px;padding:10px 14px;text-decoration:none;transition:all 0.2s;color:#1a1a2e;"
      card.onmouseenter = () => { card.style.borderColor = "#1a5632"; card.style.boxShadow = "0 2px 8px rgba(26,86,50,0.12)"; card.style.transform = "translateY(-1px)" }
      card.onmouseleave = () => { card.style.borderColor = "#e8e8f0"; card.style.boxShadow = "none"; card.style.transform = "none" }
      const nameSpan = document.createElement("span")
      nameSpan.style.cssText = "font-size:13px;font-weight:500;"
      nameSpan.textContent = pt(p)
      const priceSpan = document.createElement("span")
      priceSpan.style.cssText = "font-size:12px;font-weight:700;color:#1a5632;white-space:nowrap;margin-left:8px;"
      priceSpan.textContent = `QAR ${p.price}`
      card.append(nameSpan, priceSpan)
      grid.appendChild(card)
    }
    wrapper.appendChild(grid)
    body.appendChild(wrapper)
    scrollToBottom(body)
  }

  // --- match & message handling ---

  function matchAnswer(query, kb) {
    query = query.toLowerCase().trim()
    const tokens = query.split(/\s+/).filter(t => t.length > 2)
    const stopWords = ["the", "and", "for", "are", "but", "not", "you", "all", "can", "has", "was", "had", "her", "his", "its", "our", "out", "how", "why", "what", "when", "where", "who", "will", "your", "some", "any", "about", "want", "need", "know", "like", "just", "more", "also", "very", "well", "too"]

    let bestScore = 0
    let bestAnswer = null
    let bestKey = null

    for (const category of ["categories", "faq"]) {
      for (const [key, entry] of Object.entries(kb[category])) {
        let score = 0
        for (const kw of entry.keywords) {
          const kwl = kw.toLowerCase()
          if (query.includes(kwl)) score += kwl.split(/\s+/).length * 4
        }
        if (entry.altKeywords) {
          for (const akw of entry.altKeywords) {
            if (query.includes(akw.toLowerCase())) score += 2
          }
        }
        for (const token of tokens) {
          if (stopWords.includes(token)) continue
          for (const kw of entry.keywords) {
            const kwl = kw.toLowerCase()
            if (kwl.includes(token) && token.length > 3) score += 1
            if (token.includes(kwl) && kwl.length > 3) score += 1.5
          }
        }
        if (score > bestScore) { bestScore = score; bestAnswer = entry.answerKey; bestKey = key }
      }
    }

    if (bestScore >= 3) { STATE.lastTopic = bestKey; return t("kb." + bestAnswer) }

    const greetings = LANG === "ar"
      ? /^(مرحبا|اهلا|السلام|هلا|صباح|مساء|حي)/i
      : /^(hi+|hel+o|hey|good\s*(morning|afternoon|evening)|howdy)\b/
    if (query.match(greetings)) return t("greeting")

    if (LANG === "ar") {
      if (query.includes("شكر") || query.includes("جزيل")) return "😊 على الرحب والسعة! أخبرني إن احتجت أي شيء آخر."
      if (query.includes("مع السلام") || query.includes("وداعا") || query.includes("الى اللقاء")) return "👋 شكراً لك! زر aslielectronics.com في أي وقت أو تواصل معنا على واتساب. نتمنى لك يوماً سعيداً!"
    } else {
      if (query.includes("thank") || query.includes("thanks") || query.includes("appreciate") || query.match(/\b(thanks|thx)\b/)) return t("thanks")
      if (query.includes("bye") || query.includes("goodbye") || query.includes("see you")) return t("bye")
    }
    if (query.includes("what") && (query.includes("do") || query.includes("sell") || query.includes("carry"))) return t("whatWeSell")
    if (query.includes("discount") || query.includes("offer") || query.includes("promotion") || query.includes("deal")) return t("deals")
    return null
  }

  function handleLeadRequest(body, text, lower) {
    if (STATE.leadCaptured) {
      addMessage(body, "bot", t("leadAlready"))
      return true
    }
    addMessage(body, "bot", t("leadSure"))
    showLeadForm(body)
    return true
  }

  const PRODUCT_INTENTS = [
    /\b(show|see|browse|view|list|find|looking|need|want|search)\b.*\b(product|catalog|category|items)/,
    /\b(what|which)\b.*\b(products|cameras|switches|speakers|cables|amplifiers|locks|doorphones|nvr|dvr|router)\b/,
    /\b(i need|i want|i\'m looking|recommend|suggest)\b/,
  ]

  function handleUserMessage(body, text) {
    if (!text.trim()) return
    addMessage(body, "user", text)
    const loading = showLoading(body)
    STATE.askCount++

    const lower = text.toLowerCase().trim()

    setTimeout(() => {
      removeLoading(body)

      if (lower.match(/\b(?:quote|consultation|contact me|call me|i need help|free estimate|request.*call|get.*touch)\b/) || lower.match(/استشارة|عرض سعر|اتصل|تواصل|مساعدة|تواصل معي|اتصل بنا|راسلني/)) {
        handleLeadRequest(body)
        return
      }

      const qLabel = t("chatWhatsApp").toLowerCase()
      if (lower === qLabel || lower.includes("واتساب") || lower.includes("whatsapp")) {
        window.open("https://wa.me/" + CONFIG.whatsappNumber, "_blank")
        addMessage(body, "bot", "💬 " + t("leadWillContact") + " " + CONFIG.whatsappNumber)
        return
      }
      const talkLabel = t("talkToUs").toLowerCase()
      if (lower === talkLabel || lower.includes("تحدث معنا") || lower.includes("call me") || lower.includes("اتصل") || lower.includes("رقم")) {
        addMessage(body, "bot", t("contact"))
        addQuickReplies(body, [t("chatWhatsApp"), t("browseProducts"), t("askAnything")])
        return
      }

      const isProductQuery = PRODUCT_INTENTS.some(r => lower.match(r))
      const matchedProducts = getProductsByKeyword(lower)

      if (isProductQuery || (matchedProducts.length > 0 && !STATE.lastTopic)) {
        if (matchedProducts.length > 0) {
          addMessage(body, "bot", t("productsHere"))
          addProductCards(body, matchedProducts, "📦 " + (t("productCategories." + matchedProducts[0].category) || matchedProducts[0].category))
          addMessage(body, "bot", t("clickDetails"))
          addQuickReplies(body, [t("securityCameras"), t("networking"), t("audioSystems"), t("smartHome"), t("talkToUs")])
          return
        }
      }

      const arabicCatMap = {
        "كاميرا": { products: getProductsByCategory("Security Surveillance"), nameKey: "catSecurity" },
        "كاميرات": { products: getProductsByCategory("Security Surveillance"), nameKey: "catSecurity" },
        "مراقبة": { products: getProductsByCategory("Security Surveillance"), nameKey: "catSecurity" },
        "cctv": { products: getProductsByCategory("Security Surveillance"), nameKey: "catSecurity" },
        "شبكة": { products: getProductsByCategory("Networking"), nameKey: "catNetworking" },
        "شبكات": { products: getProductsByCategory("Networking"), nameKey: "catNetworking" },
        "راوتر": { products: getProductsByCategory("Networking"), nameKey: "catNetworking" },
        "سويتش": { products: getProductsByCategory("Networking"), nameKey: "catNetworking" },
        "صوت": { products: getProductsByCategory("Audio"), nameKey: "catAudio" },
        "سماعة": { products: getProductsByCategory("Audio"), nameKey: "catAudio" },
        "سماعات": { products: getProductsByCategory("Audio"), nameKey: "catAudio" },
        "مكبر": { products: getProductsByCategory("Audio"), nameKey: "catAudio" },
        "ذكي": { products: getProductsByCategory("Smart Home"), nameKey: "catSmart" },
        "منزل": { products: getProductsByCategory("Smart Home"), nameKey: "catSmart" },
        "قفل": { products: getProductsByCategory("Smart Home"), nameKey: "catSmart" },
        "باب": { products: getProductsByCategory("Smart Home"), nameKey: "catSmart" },
        "جرس": { products: getProductsByCategory("Smart Home"), nameKey: "catSmart" },
        "كابل": { products: getProductsByCategory("Cable"), nameKey: "catCable" },
        "كابلات": { products: getProductsByCategory("Cable"), nameKey: "catCable" },
      }

      for (const [word, data] of Object.entries(arabicCatMap)) {
        if (lower.includes(word) && data.products.length > 0) {
          addMessage(body, "bot", t("hereAre") + " " + t(data.nameKey) + ":")
          addProductCards(body, data.products, "📦 " + t(data.nameKey))
          addMessage(body, "bot", t("viewDetails"))
          addQuickReplies(body, [t("chatWhatsApp"), t("requestCall"), t("askAnything")])
          return
        }
      }

      const catMap = {
        camera: { products: getProductsByCategory("Security Surveillance"), nameKey: "catSecurity" },
        cctv: { products: getProductsByCategory("Security Surveillance"), nameKey: "catSecurity" },
        nvr: { products: getProductsByCategory("Security Surveillance"), nameKey: "catSecurity" },
        dvr: { products: getProductsByCategory("Security Surveillance"), nameKey: "catSecurity" },
        doorphone: { products: getProductsByCategory("Smart Home").filter(p => p.title.en.includes("Doorphone") || p.title.en.includes("Doorbell")), nameKey: "catSmart" },
        doorbell: { products: getProductsByCategory("Smart Home").filter(p => p.title.en.includes("Doorbell") || p.title.en.includes("Doorphone")), nameKey: "catSmart" },
        switch: { products: getProductsByCategory("Networking").filter(p => p.title.en.includes("Switch") || p.title.en.includes("PoE")), nameKey: "catNetworking" },
        router: { products: getProductsByCategory("Networking").filter(p => p.title.en.includes("Router") || p.title.en.includes("Access Point") || p.title.en.includes("LTE")), nameKey: "catNetworking" },
        amplifier: { products: getProductsByCategory("Audio").filter(p => p.title.en.includes("Amplifier")), nameKey: "catAudio" },
        speaker: { products: getProductsByCategory("Audio").filter(p => p.title.en.includes("Speaker") || p.title.en.includes("Ceiling")), nameKey: "catAudio" },
        cable: { products: getProductsByCategory("Cable"), nameKey: "catCable" },
        lock: { products: getProductsByCategory("Smart Home").filter(p => p.title.en.includes("Lock") || p.title.en.includes("Gate")), nameKey: "catSmart" },
        smart: { products: getProductsByCategory("Smart Home").filter(p => p.title.en.includes("Smart")), nameKey: "catSmart" },
      }

      for (const [word, data] of Object.entries(catMap)) {
        if (lower.includes(word) && data.products.length > 0) {
          addMessage(body, "bot", t("hereAre") + " " + t(data.nameKey) + ":")
          addProductCards(body, data.products, "📦 " + t(data.nameKey))
          addMessage(body, "bot", t("viewDetails"))
          addQuickReplies(body, [t("chatWhatsApp"), t("requestCall"), t("askAnything")])
          return
        }
      }

      const match = matchAnswer(text, KB)
      if (match) {
        addMessage(body, "bot", match)
        addQuickReplies(body, [t("browseProducts"), t("chatWhatsApp"), t("askAnything")])
      } else {
        if (STATE.askCount <= 1) {
          addMessage(body, "bot", t("greeting"))
          addQuickReplies(body, [
            t("securityCameras"),
            t("networking"),
            t("audioSystems"),
            t("smartHome"),
            t("talkToUs"),
          ])
        } else {
          addMessage(body, "bot", t("leadConnect"))
          if (!STATE.leadCaptured) {
            addMessage(body, "bot", t("leadWantDetails"))
            addQuickReplies(body, [t("yesContact"), t("chatWhatsApp")])
          } else {
            addQuickReplies(body, [t("browseProducts"), t("chatWhatsApp")])
          }
        }
      }
    }, 400 + Math.random() * 500)
  }

  // --- UI ---

  const COLORS = {
    primary: CONFIG.companyColor,
    primaryLight: CONFIG.companyColorLight,
    primaryDark: "#0f2e1a",
    accent: "#e8a838",
    bg: "#ffffff",
    text: "#1a1a2e",
    textLight: "#5a5a7a",
    muted: "#888",
    border: "#e0e8e0",
    borderLight: "#eef4ee",
    bubbleBg: "#f0f8f0",
    bubbleBotBg: "#f0f8f0",
    shadow: "rgba(0,0,0,0.12)",
    shadowHeavy: "rgba(0,0,0,0.22)",
    userBubble: CONFIG.companyColor,
    userBubbleText: "#fff",
    success: "#10b981",
    online: "#34d399",
    whatsapp: "#25D366",
    whatsappHover: "#20bd5a",
    gradientStart: CONFIG.companyColor,
    gradientEnd: CONFIG.companyColorLight,
  }

  const STYLES = `
#asli-chatbot-container { all: initial; font-family: 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif; }
#asli-chatbot-container *, #asli-chatbot-container *::before, #asli-chatbot-container *::after { box-sizing: border-box; }

#asli-chatbot-container.asli-rtl { direction: rtl; }
#asli-chatbot-container.asli-rtl .asli-cb-msg.bot { border-bottom-left-radius:16px; border-bottom-right-radius:4px; }
#asli-chatbot-container.asli-rtl .asli-cb-msg.user { border-bottom-right-radius:16px; border-bottom-left-radius:4px; }
#asli-chatbot-container.asli-rtl .asli-cb-footer { flex-direction: row-reverse; }
#asli-chatbot-container.asli-rtl .asli-cb-input { text-align: right; }
#asli-chatbot-container.asli-rtl .asli-cb-qr-wrap { flex-direction: row-reverse; }

.asli-cb-btn {
  position: fixed; bottom: 24px; right: 24px; width: 62px; height: 62px; border-radius: 50%;
  background: linear-gradient(135deg, ${COLORS.gradientStart}, ${COLORS.gradientEnd});
  color: #fff; border: none; cursor: pointer; z-index: 999999;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 6px 24px rgba(26,86,50,0.35);
  transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease;
}
.asli-cb-btn:hover { transform: scale(1.1); box-shadow: 0 8px 32px rgba(26,86,50,0.45); }
.asli-cb-btn:active { transform: scale(0.95); }
.asli-cb-btn svg { width: 26px; height: 26px; transition: transform 0.3s ease; }
.asli-cb-btn.asli-cb-open svg { transform: rotate(45deg); }
.asli-cb-btn::before {
  content: ''; position: absolute; inset: -4px; border-radius: 50%;
  animation: asliPulse 2s ease-out infinite;
}
@keyframes asliPulse {
  0% { box-shadow: 0 0 0 0 rgba(26,86,50,0.4); }
  70% { box-shadow: 0 0 0 14px rgba(26,86,50,0); }
  100% { box-shadow: 0 0 0 0 rgba(26,86,50,0); }
}
.asli-cb-btn.asli-cb-open::before { animation: none; display: none; }

.asli-cb-window {
  position: fixed; bottom: 100px; right: 24px; width: 390px; height: 620px; max-height: 85vh;
  background: ${COLORS.bg}; border-radius: 20px; z-index: 999998;
  display: none; flex-direction: column; overflow: hidden;
  box-shadow: 0 16px 60px ${COLORS.shadowHeavy}, 0 0 0 1px rgba(0,0,0,0.04);
  animation: asliSlideUp 0.35s cubic-bezier(0.16,1,0.3,1);
}
@keyframes asliSlideUp { from { opacity:0; transform:translateY(24px) scale(0.96); } to { opacity:1; transform:translateY(0) scale(1); } }

.asli-cb-lang-overlay {
  position: absolute; inset: 0; z-index: 100; background: ${COLORS.bg};
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px;
  padding: 40px 24px; border-radius: 20px; animation: asliFadeIn 0.3s ease;
}
.asli-cb-lang-overlay h2 { font-size: 17px; font-weight: 600; color: ${COLORS.text}; margin: 0 0 8px; text-align: center; }
.asli-cb-lang-options { display: flex; flex-direction: column; gap: 10px; width: 100%; max-width: 260px; }
.asli-cb-lang-btn {
  display: flex; align-items: center; justify-content: center; gap: 10px;
  padding: 14px 20px; border-radius: 14px; font-size: 15px; font-weight: 500;
  cursor: pointer; border: 2px solid ${COLORS.border}; background: ${COLORS.bg};
  color: ${COLORS.text}; font-family: inherit;
  transition: all 0.2s;
}
.asli-cb-lang-btn:hover { border-color: ${COLORS.primary}; background: #f0f8f0; transform: translateY(-1px); }
.asli-cb-lang-btn .lang-flag { font-size: 24px; }
.asli-cb-lang-btn .lang-name { font-size: 15px; }

.asli-cb-header {
  background: linear-gradient(135deg, ${COLORS.gradientStart}, ${COLORS.gradientEnd});
  color: #fff; padding: 18px 20px 16px; display: flex; align-items: center; gap: 13px;
  position: relative; flex-shrink: 0;
}
.asli-cb-header::after { content:''; position:absolute; bottom:0; left:20px; right:20px; height:1px; background:rgba(255,255,255,0.08); }
.asli-cb-avatar-wrap { position:relative; flex-shrink:0; display:flex; align-items:center; }
.asli-cb-avatar { border-radius:12px; background:rgba(255,255,255,0.12); backdrop-filter:blur(4px); display:flex; align-items:center; justify-content:center; padding:6px 10px; box-shadow:0 2px 8px rgba(0,0,0,0.12); }
.asli-cb-online-dot { position:absolute; bottom:0; right:0; width:12px; height:12px; border-radius:50%; background:${COLORS.online}; border:2px solid ${COLORS.primary}; }
.asli-cb-lang-toggle {
  background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.2); border-radius: 20px;
  color: #fff; cursor: pointer; font-size: 12px; padding: 4px 10px; font-family: inherit;
  white-space: nowrap; transition: background 0.2s; margin-left: auto;
}
.asli-cb-lang-toggle:hover { background: rgba(255,255,255,0.2); }
.asli-cb-header-text { flex:1; }
.asli-cb-header-text h3 { margin:0; font-size:14px; font-weight:600; letter-spacing:-0.01em; }
.asli-cb-header-text p { margin:2px 0 0; font-size:11px; opacity:0.85; display:flex; align-items:center; gap:4px; }
.asli-cb-close { background:none; border:none; color:rgba(255,255,255,0.7); cursor:pointer; font-size:20px; padding:4px; line-height:1; transition:color 0.2s; }
.asli-cb-close:hover { color:#fff; }
.asli-cb-body { flex:1; overflow-y:auto; padding:16px; display:flex; flex-direction:column; gap:8px; scrollbar-width:thin; scrollbar-color:#e0e8e0 transparent; position: relative; }
.asli-cb-body::-webkit-scrollbar { width:5px; }
.asli-cb-body::-webkit-scrollbar-track { background:transparent; }
.asli-cb-body::-webkit-scrollbar-thumb { background:#e0e8e0; border-radius:10px; }
.asli-cb-msg { max-width:88%; padding:12px 16px; border-radius:16px; font-size:13.5px; line-height:1.55; word-wrap:break-word; animation:asliFadeIn 0.25s ease; }
@keyframes asliFadeIn { from { opacity:0; transform:translateY(6px); } to { opacity:1; transform:translateY(0); } }
.asli-cb-msg.bot { align-self:flex-start; background:${COLORS.bubbleBotBg}; color:${COLORS.text}; border-bottom-left-radius:4px; box-shadow:0 1px 3px rgba(0,0,0,0.04); white-space:pre-line; }
.asli-cb-msg.user { align-self:flex-end; background:${COLORS.userBubble}; color:${COLORS.userBubbleText}; border-bottom-right-radius:4px; }
.asli-cb-msg.system { align-self:center; background:#fef2f2; color:#dc2626; font-size:12px; padding:8px 14px; border-radius:10px; }

.asli-cb-qr-wrap { display:flex; flex-wrap:wrap; gap:6px; padding:4px 0; animation:asliFadeIn 0.3s ease; }
.asli-cb-qr-btn {
  background: #fff; border: 1.5px solid ${COLORS.primary}; color: ${COLORS.primary}; padding: 8px 14px;
  border-radius: 20px; font-size: 12.5px; font-weight: 500; cursor: pointer;
  transition: all 0.2s; font-family: inherit;
}
.asli-cb-qr-btn:hover { background: ${COLORS.primary}; color: #fff; transform: translateY(-1px); box-shadow: 0 4px 12px rgba(26,86,50,0.25); }
.asli-cb-qr-btn:active { transform: translateY(0); }

.asli-cb-footer {
  padding: 12px 16px 14px; border-top: 1px solid ${COLORS.borderLight}; display: flex; gap: 8px;
  background: ${COLORS.bg}; flex-shrink: 0;
}
.asli-cb-input {
  flex:1; border:1.5px solid ${COLORS.border}; border-radius:24px; padding:10px 16px;
  font-size:13.5px; outline:none; font-family:inherit;
  transition:border-color 0.2s, box-shadow 0.2s; background:#f8faf8;
}
.asli-cb-input:focus { border-color:${COLORS.primary}; box-shadow:0 0 0 3px rgba(26,86,50,0.1); background:#fff; }
.asli-cb-send {
  width:42px; height:42px; border-radius:50%;
  background:linear-gradient(135deg, ${COLORS.gradientStart}, ${COLORS.gradientEnd});
  color:#fff; border:none; cursor:pointer; display:flex; align-items:center; justify-content:center;
  flex-shrink:0; transition:transform 0.2s, box-shadow 0.2s;
  box-shadow:0 2px 8px rgba(26,86,50,0.25);
}
.asli-cb-send:hover { transform:scale(1.08); box-shadow:0 4px 14px rgba(26,86,50,0.35); }
.asli-cb-send:active { transform:scale(0.95); }
.asli-cb-send svg { width:17px; height:17px; }

.asli-cb-form { display:flex; flex-direction:column; gap:10px; padding:6px 0; animation:asliFadeIn 0.3s ease; }
.asli-cb-form label { font-size:12px; font-weight:600; color:${COLORS.textLight}; margin-bottom:-4px; }
.asli-cb-form input, .asli-cb-form select, .asli-cb-form textarea {
  width:100%; padding:11px 14px; border:1.5px solid ${COLORS.border}; border-radius:12px;
  font-size:13px; outline:none; font-family:inherit;
  transition:border-color 0.2s, box-shadow 0.2s; background:#fafcfa; color:${COLORS.text};
}
.asli-cb-form input:focus, .asli-cb-form select:focus, .asli-cb-form textarea:focus { border-color:${COLORS.primary}; box-shadow:0 0 0 3px rgba(26,86,50,0.08); background:#fff; }
.asli-cb-form textarea { resize:vertical; min-height:52px; }
.asli-cb-form button {
  background:linear-gradient(135deg, ${COLORS.gradientStart}, ${COLORS.gradientEnd});
  color:#fff; border:none; padding:12px; border-radius:12px; font-size:14px; font-weight:600;
  cursor:pointer; transition:transform 0.2s, box-shadow 0.2s;
  box-shadow:0 3px 12px rgba(26,86,50,0.25); margin-top:4px;
}
.asli-cb-form button:hover { transform:translateY(-1px); box-shadow:0 6px 20px rgba(26,86,50,0.35); }
.asli-cb-form .asli-required { color:#ef4444; }

.asli-cb-whatsapp-btn {
  display:flex; align-items:center; justify-content:center; gap:8px;
  background:${COLORS.whatsapp}; color:#fff; padding:11px 16px; border-radius:12px;
  text-decoration:none; font-size:13px; font-weight:600; margin-top:6px;
  transition:transform 0.2s, box-shadow 0.2s;
  box-shadow:0 3px 12px rgba(37,211,102,0.3);
}
.asli-cb-whatsapp-btn:hover { background:${COLORS.whatsappHover}; transform:translateY(-1px); box-shadow:0 6px 20px rgba(37,211,102,0.4); }

.asli-cb-loading { display:flex; gap:4px; padding:12px 16px; align-self:flex-start; background:${COLORS.bubbleBotBg}; border-radius:16px; border-bottom-left-radius:4px; }
.asli-cb-loading span { width:7px; height:7px; border-radius:50%; background:#b0c8b0; animation:asliBounce 1.2s infinite; }
.asli-cb-loading span:nth-child(2) { animation-delay:0.2s; }
.asli-cb-loading span:nth-child(3) { animation-delay:0.4s; }
@keyframes asliBounce { 0%,60%,100% { transform:translateY(0); } 30% { transform:translateY(-6px); } }
`

  const STATE = { messages: [], leadCaptured: false, step: null, leadData: {}, lastTopic: null, askCount: 0 }

  // --- UI construction ---

  function injectStyles() {
    const existing = document.getElementById("asli-cb-styles")
    if (existing) return
    const s = document.createElement("style")
    s.id = "asli-cb-styles"
    s.textContent = STYLES
    document.head.appendChild(s)
  }

  function scrollToBottom(el) { requestAnimationFrame(() => { el.scrollTop = el.scrollHeight }) }

  function addMessage(body, type, text) {
    if (type === "bot") STATE.messages.push(text)
    const msg = document.createElement("div")
    msg.className = "asli-cb-msg " + type
    msg.textContent = text
    body.appendChild(msg)
    scrollToBottom(body)
  }

  function addQuickReplies(body, labels) {
    const wrap = document.createElement("div")
    wrap.className = "asli-cb-qr-wrap"
    for (const label of labels) {
      const btn = document.createElement("button")
      btn.className = "asli-cb-qr-btn"
      btn.textContent = label
      btn.onclick = () => {
        wrap.remove()
        handleUserMessage(body, label)
      }
      wrap.appendChild(btn)
    }
    body.appendChild(wrap)
    scrollToBottom(body)
  }

  function showLoading(body) {
    const el = document.createElement("div")
    el.className = "asli-cb-loading"
    el.id = "asliLoading"
    el.innerHTML = "<span></span><span></span><span></span>"
    body.appendChild(el)
    scrollToBottom(body)
    return el
  }

  function removeLoading(body) {
    const el = body.querySelector("#asliLoading")
    if (el) el.remove()
  }

  function showLanguageScreen(body) {
    const overlay = document.createElement("div")
    overlay.className = "asli-cb-lang-overlay"
    overlay.id = "asliLangOverlay"
    overlay.innerHTML = `
      <div style="width:64px;height:64px;border-radius:16px;background:linear-gradient(135deg,${COLORS.gradientStart},${COLORS.gradientEnd});display:flex;align-items:center;justify-content:center;font-size:32px;box-shadow:0 4px 16px rgba(26,86,50,0.25);">${CONFIG.companyName[0]}</div>
      <h2 id="asliLangTitle">${t("selectLanguage")}</h2>
      <div class="asli-cb-lang-options" id="asliLangOptions">
        <button class="asli-cb-lang-btn" data-lang="en">
          <span class="lang-flag">🇬🇧</span>
          <span class="lang-name">English</span>
        </button>
        <button class="asli-cb-lang-btn" data-lang="ar">
          <span class="lang-flag">🇶🇦</span>
          <span class="lang-name">العربية</span>
        </button>
      </div>
    `
    body.appendChild(overlay)

    overlay.querySelectorAll(".asli-cb-lang-btn").forEach(btn => {
      btn.onclick = () => {
        const lang = btn.dataset.lang
        overlay.remove()
        LANG = lang
        localStorage.setItem(LANG_STORAGE_KEY, lang)
        document.documentElement.dir = LANGS[lang].dir
        updateContainerDir()
        updateHeaderLang(lang)
        startChat(body)
      }
    })
    scrollToBottom(body)
  }

  function updateContainerDir() {
    const container = document.getElementById("asli-chatbot-container")
    if (container) {
      if (LANG === "ar") container.classList.add("asli-rtl")
      else container.classList.remove("asli-rtl")
    }
  }

  function updateHeaderLang(lang) {
    const toggle = document.getElementById("asliCbLangToggle")
    if (toggle) {
      const nextLang = lang === "en" ? "ar" : "en"
      toggle.textContent = LANGS[nextLang].flag + " " + LANGS[nextLang].name
    }
    const botNameEl = document.getElementById("asliCbBotName")
    if (botNameEl) botNameEl.textContent = TRANS[lang].botName
    const onlineEl = document.getElementById("asliCbOnline")
    if (onlineEl) onlineEl.textContent = TRANS[lang].online
  }

  function startChat(body) {
    STATE.messages.push("init")
    setTimeout(() => {
      addMessage(body, "bot", t("welcome"))
      setTimeout(() => {
        addMessage(body, "bot", t("welcomeFollowUp"))
        addQuickReplies(body, [
          t("securityCameras"),
          t("networking"),
          t("audioSystems"),
          t("smartHome"),
          t("talkToUs"),
        ])
      }, 400)
    }, 400)
  }

  function showLeadForm(body) {
    const form = document.createElement("div")
    form.className = "asli-cb-form"
    form.innerHTML = `
      <label>${t("formName")} <span class="asli-required">*</span></label>
      <input type="text" id="asliLfName" placeholder="${LANG === "ar" ? "مثال: أحمد" : "e.g. Ahmed"}" required />
      <label>${t("formPhone")} <span class="asli-required">*</span></label>
      <input type="tel" id="asliLfPhone" placeholder="+974 XXXX XXXX" required />
      <label>${t("formEmail")}</label>
      <input type="email" id="asliLfEmail" placeholder="email@example.com" />
      <label>${t("formInterest")}</label>
      <select id="asliLfInterest">
        <option value="">${LANG === "ar" ? "اختر الفئة" : "Select category"}</option>
        <option>${t("interestCameras")}</option>
        <option>${t("interestNetworking")}</option>
        <option>${t("interestAudio")}</option>
        <option>${t("interestSmart")}</option>
        <option>${t("interestCables")}</option>
        <option>${t("interestInstall")}</option>
        <option>${t("interestWholesale")}</option>
        <option>${t("interestOther")}</option>
      </select>
      <label>${t("formMessage")} <span style="color:${COLORS.muted};font-weight:400;">${t("formOpt")}</span></label>
      <textarea id="asliLfMessage" placeholder="${LANG === "ar" ? "أخبرنا ماذا تحتاج..." : "Tell us what you need..."}" rows="2"></textarea>
      <button id="asliLfSubmit">${t("formSubmit")}</button>
      <a class="asli-cb-whatsapp-btn" href="https://wa.me/${CONFIG.whatsappNumber}" target="_blank">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        ${t("whatsappBtn")}
      </a>
    `
    body.appendChild(form)
    scrollToBottom(body)

    document.getElementById("asliLfSubmit").onclick = function () {
      const name = document.getElementById("asliLfName").value.trim()
      const phone = document.getElementById("asliLfPhone").value.trim()
      if (!name || !phone) {
        addMessage(body, "system", t("formRequired"))
        return
      }
      const leadData = {
        access_key: CONFIG.accessKey,
        name, phone,
        email: document.getElementById("asliLfEmail").value.trim(),
        interest: document.getElementById("asliLfInterest").value,
        message: document.getElementById("asliLfMessage").value.trim(),
        source: "asli-chatbot",
        page: window.location.href,
      }
      STATE.leadCaptured = true
      STATE.leadData = leadData
      form.remove()

      fetch(CONFIG.apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadData),
      }).catch(() => {})

      addMessage(body, "bot", t("leadThank") + ", " + name + "! " + t("leadWillContact") + " " + phone + " " + t("leadWithin"))
      addMessage(body, "bot", t("leadBrowse"))
      addQuickReplies(body, [t("browseProducts"), t("chatWhatsApp"), t("askAnything")])
    }
  }

  function createWidget() {
    const container = document.createElement("div")
    container.id = "asli-chatbot-container"
    container.innerHTML = `
      <button class="asli-cb-btn" id="asliCbBtn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      </button>
      <div class="asli-cb-window" id="asliCbWindow">
        <div class="asli-cb-header">
          <div class="asli-cb-avatar-wrap">
            <div class="asli-cb-avatar" style="width:38px;height:38px;border-radius:50%;padding:0;">
              <span style="font-size:20px;font-weight:800;color:#fff;font-family:Inter,system-ui,sans-serif;">A</span>
            </div>
            <span class="asli-cb-online-dot"></span>
          </div>
          <div class="asli-cb-header-text">
            <h3 id="asliCbBotName">${TRANS.en.botName}</h3>
            <p><span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:#34d399;"></span> <span id="asliCbOnline">${TRANS.en.online}</span></p>
          </div>
          <button class="asli-cb-lang-toggle" id="asliCbLangToggle" title="Change language / تغيير اللغة">🇶🇦 العربية</button>
          <button class="asli-cb-close" id="asliCbClose">✕</button>
        </div>
        <div class="asli-cb-body" id="asliCbBody"></div>
        <div class="asli-cb-footer">
          <input class="asli-cb-input" id="asliCbInput" placeholder="Ask about products..." />
          <button class="asli-cb-send" id="asliCbSend">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </button>
        </div>
      </div>
    `
    document.body.appendChild(container)
    return {
      container,
      btn: document.getElementById("asliCbBtn"),
      window: document.getElementById("asliCbWindow"),
      body: document.getElementById("asliCbBody"),
      close: document.getElementById("asliCbClose"),
      input: document.getElementById("asliCbInput"),
      send: document.getElementById("asliCbSend"),
      langToggle: document.getElementById("asliCbLangToggle"),
    }
  }

  function init() {
    injectStyles()
    LANG = detectLanguage()
    const el = createWidget()
    let isOpen = false

    updateContainerDir()
    updateHeaderLang(LANG)
    el.input.placeholder = TRANS[LANG].inputPlaceholder

    el.langToggle.onclick = () => {
      const newLang = LANG === "en" ? "ar" : "en"
      setLanguage(newLang, el.body)
      updateContainerDir()
      updateHeaderLang(newLang)
      el.input.placeholder = TRANS[newLang].inputPlaceholder
    }

    function toggleOpen() {
      isOpen = !isOpen
      el.window.style.display = isOpen ? "flex" : "none"
      el.btn.classList.toggle("asli-cb-open", isOpen)
      if (isOpen && STATE.messages.length === 0) {
        showLanguageScreen(el.body)
      }
    }

    el.btn.onclick = toggleOpen
    el.close.onclick = toggleOpen

    el.send.onclick = () => {
      const text = el.input.value.trim()
      if (text) { el.input.value = ""; handleUserMessage(el.body, text) }
    }
    el.input.addEventListener("keydown", e => { if (e.key === "Enter") el.send.click() })
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init)
  } else {
    init()
  }
})()
