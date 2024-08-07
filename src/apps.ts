type App = {
	name: string;
	desc: string;
	lang: Lang;
};

export enum Lang {
	C = "C",
	CPlusPlus = "C++",
	Crystal = "Crystal",
	CSharp = "CSharp",
	Go = "Go",
	JavaScript = "JavaScript",
	Python = "Python",
	Rust = "Rust",
	Swift = "Swift",
	Vala = "Vala",
}

const APP_MAP: Record<string, App> = {
	"io.bassi.Amberol": {
		name: "Amberol",
		desc: "Plays music, and nothing else",
		lang: Lang.Rust,
	},
	"net.natesales.Aviator": {
		name: "Aviator",
		desc: "Your Video Copilot: AV1/OPUS Video Encoder",
		lang: Lang.Python,
	},
	"io.github.Bavarder.Bavarder": {
		name: "Bavarder",
		desc: "Chit-chat with an AI",
		lang: Lang.Python,
	},
	"com.raggesilver.BlackBox": {
		name: "Black Box",
		desc: "A beautiful GTK 4 terminal",
		lang: Lang.Vala,
	},
	"com.rafaelmardojai.Blanket": {
		name: "Blanket",
		desc: "Listen to different sounds",
		lang: Lang.Python,
	},
	"com.usebottles.bottles": {
		name: "Bottles",
		desc: "Run Windows Software",
		lang: Lang.Python,
	},
	"org.gnome.Builder": {
		name: "Builder",
		desc: "An IDE for GNOME",
		lang: Lang.C,
	},
	"hu.kramo.Cartridges": {
		name: "Cartridges",
		desc: "Launch all your games",
		lang: Lang.Python,
	},
	"org.gnome.Snapshot": {
		name: "Snapshot",
		desc: "Take pictures and videos",
		lang: Lang.Rust,
	},
	"org.nickvision.cavalier": {
		name: "Cavalier",
		desc: "Visualize audio with CAVA",
		lang: Lang.CSharp,
	},
	"com.github.rafostar.Clapper": {
		name: "Clapper",
		desc: "Simple and modern GNOME media player",
		lang: Lang.JavaScript,
	},
	"org.gnome.design.Contrast": {
		name: "Contrast",
		desc: "Check contrast between two colors",
		lang: Lang.Rust,
	},
	"io.gitlab.adhami3310.Converter": {
		name: "Switcheroo",
		desc: "Convert and manipulate images",
		lang: Lang.Rust,
	},
	"com.github.huluti.Curtail": {
		name: "Curtail",
		desc: "Compress your images",
		lang: Lang.Python,
	},
	"com.belmoussaoui.Decoder": {
		name: "Decoder",
		desc: "Scan and Generate QR Codes",
		lang: Lang.Rust,
	},
	"org.nickvision.money": {
		name: "Denaro",
		desc: "Manage your personal finances",
		lang: Lang.CSharp,
	},
	"app.drey.Dialect": {
		name: "Dialect",
		desc: "Translate between languages",
		lang: Lang.Python,
	},
	"me.dusansimic.DynamicWallpaper": {
		name: "Dynamic Wallpaper",
		desc: "Dynamic wallpaper creator for Gnome 42",
		lang: Lang.Python,
	},
	"com.github.wwmm.easyeffects": {
		name: "Easy Effects",
		desc: "Audio Effects for PipeWire Applications",
		lang: Lang.CPlusPlus,
	},
	"io.github.mrvladus.List": {
		name: "Errands",
		desc: "Manage your tasks",
		lang: Lang.Python,
	},
	"io.github.cleomenezesjr.Escambo": {
		name: "Escambo",
		desc: "Test and develop APIs",
		lang: Lang.Python,
	},
	"com.mattjakeman.ExtensionManager": {
		name: "Extension Manager",
		desc: "Browse, install, and manage GNOME Shell Extensions",
		lang: Lang.C,
	},
	"com.github.finefindus.eyedropper": {
		name: "Eyedropper",
		desc: "Pick and format colors",
		lang: Lang.Rust,
	},
	"com.github.ADBeveridge.Raider": {
		name: "File Shredder",
		desc: "Securely delete your files",
		lang: Lang.C,
	},
	"de.schmidhuberj.Flare": {
		name: "Flare",
		desc: "Chat with your friends on Signal",
		lang: Lang.Rust,
	},
	"com.github.tchx84.Flatseal": {
		name: "Flatseal",
		desc: "Manage Flatpak permissions",
		lang: Lang.JavaScript,
	},
	"io.github.giantpinkrobots.flatsweep": {
		name: "Flatsweep",
		desc: "Flatpak leftover cleaner",
		lang: Lang.Python,
	},
	"io.github.diegoivanme.flowtime": {
		name: "Flowtime",
		desc: "Spend your time wisely",
		lang: Lang.Vala,
	},
	"com.mardojai.ForgeSparks": {
		name: "Forge Sparks",
		desc: "Get Git forges notifications",
		lang: Lang.JavaScript,
	},
	"de.haeckerfelix.Fragments": {
		name: "Fragments",
		desc: "A BitTorrent Client",
		lang: Lang.Rust,
	},
	"io.github.realmazharhussain.GdmSettings": {
		name: "GDM Settings",
		desc: "Customize your login screen",
		lang: Lang.Python,
	},
	"dev.Cogitri.Health": {
		name: "Health",
		desc: "Track your fitness goals",
		lang: Lang.Rust,
	},
	"org.gnome.Loupe": {
		name: "Loupe",
		desc: "View images",
		lang: Lang.Rust,
	},
	"io.gitlab.adhami3310.Impression": {
		name: "Impression",
		desc: "Create bootable drives",
		lang: Lang.Rust,
	},
	"io.gitlab.gregorni.Letterpress": {
		name: "Letterpress",
		desc: "Create beautiful ASCII art",
		lang: Lang.Python,
	},
	"org.gnome.design.Lorem": {
		name: "Lorem",
		desc: "Generate placeholder text",
		lang: Lang.Rust,
	},
	"fr.romainvigier.MetadataCleaner": {
		name: "Metadata Cleaner",
		desc: "View and clean metadata in files",
		lang: Lang.Python,
	},
	"io.missioncenter.MissionCenter": {
		name: "Mission Center",
		desc: "Monitor system resource usage",
		lang: Lang.Rust,
	},
	"io.gitlab.zehkira.Monophony": {
		name: "Monophony",
		desc: "Stream music from YouTube",
		lang: Lang.Python,
	},
	"io.github.seadve.Mousai": {
		name: "Mousai",
		desc: "Identify songs in seconds",
		lang: Lang.Rust,
	},
	"io.gitlab.news_flash.NewsFlash": {
		name: "NewsFlash",
		desc: "Keep up with your feeds",
		lang: Lang.Rust,
	},
	"com.belmoussaoui.Obfuscate": {
		name: "Obfuscate",
		desc: "Censor private information",
		lang: Lang.Rust,
	},
	"org.nickvision.tubeconverter": {
		name: "Parabolic",
		desc: "Download web video and audio",
		lang: Lang.CSharp,
	},
	"org.gnome.World.PikaBackup": {
		name: "Pika Backup",
		desc: "Keep your data safe",
		lang: Lang.Rust,
	},
	"org.gnome.Podcasts": {
		name: "Podcasts",
		desc: "Listen to your favorite shows",
		lang: Lang.Rust,
	},
	"com.github.marhkb.Pods": {
		name: "Pods",
		desc: "Keep track of your podman containers",
		lang: Lang.Rust,
	},
	"net.nokyan.Resources": {
		name: "Resources",
		desc: "Monitor your system resources and processes",
		lang: Lang.Rust,
	},
	"com.rafaelmardojai.SharePreview": {
		name: "Share Preview",
		desc: "Test social media cards locally",
		lang: Lang.Rust,
	},
	"de.haeckerfelix.Shortwave": {
		name: "Shortwave",
		desc: "Listen to internet radio",
		lang: Lang.Rust,
	},
	"it.mijorus.smile": {
		name: "Smile",
		desc: "An emoji picker",
		lang: Lang.Python,
	},
	"org.gnome.Solanum": {
		name: "Solanum",
		desc: "Balance working time and break time",
		lang: Lang.Rust,
	},
	"xyz.ketok.Speedtest": {
		name: "Speedtest",
		desc: "Measure your internet connection speed",
		lang: Lang.Python,
	},
	"dev.alextren.Spot": {
		name: "Spot",
		desc: "Listen to music on Spotify",
		lang: Lang.Rust,
	},
	"com.github.liferooter.textpieces": {
		name: "Text Pieces",
		desc: "Transform text without using random websites",
		lang: Lang.Vala,
	},
	"me.iepure.Ticketbooth": {
		name: "Ticket Booth",
		desc: "Keep track of your favorite shows",
		lang: Lang.Python,
	},
	"de.philippun1.turtle": {
		name: "Turtle",
		desc: "Manage your git repositories",
		lang: Lang.Python,
	},
	"io.gitlab.theevilskeleton.Upscaler": {
		name: "Upscaler",
		desc: "Upscale and enhance images",
		lang: Lang.Python,
	},
	"com.github.unrud.VideoDownloader": {
		name: "Video Downloader",
		desc: "Download videos from websites like YouTube and many others",
		lang: Lang.Python,
	},
	"org.gnome.gitlab.YaLTeR.VideoTrimmer": {
		name: "Video Trimmer",
		desc: "Trim videos quickly",
		lang: Lang.Rust,
	},
	"io.github.flattool.Warehouse": {
		name: "Warehouse",
		desc: "Manage all things Flatpak",
		lang: Lang.Python,
	},
	"app.drey.Warp": {
		name: "Warp",
		desc: "Fast and secure file transfer",
		lang: Lang.Rust,
	},
	"com.github.hugolabe.Wike": {
		name: "Wike",
		desc: "Search and read Wikipedia articles",
		lang: Lang.Python,
	},
	"re.sonny.Workbench": {
		name: "Workbench",
		desc: "Learn and prototype with GNOME technologies",
		lang: Lang.JavaScript,
	},
	"org.gnome.Music": {
		name: "Music",
		desc: "Play and organize your music collection",
		lang: Lang.Python,
	},
	"org.gnome.Calendar": {
		name: "Calendar",
		desc: "Calendar for GNOME",
		lang: Lang.C,
	},
	"org.gnome.Weather": {
		name: "Weather",
		desc: "Show weather conditions and forecast",
		lang: Lang.JavaScript,
	},
	"org.gnome.Maps": {
		name: "Maps",
		desc: "Find places around the world",
		lang: Lang.JavaScript,
	},
	"org.gnome.clocks": {
		name: "Clocks",
		desc: "Keep track of time",
		lang: Lang.Vala,
	},
	"org.gnome.Epiphany": {
		name: "Web",
		desc: "Browse the web",
		lang: Lang.C,
	},
	"io.github.nate_xyz.Resonance": {
		name: "Resonance",
		desc: "Harmonize your listening experience",
		lang: Lang.Rust,
	},
	"com.vixalien.decibels": {
		name: "Decibels",
		desc: "Play audio files",
		lang: Lang.JavaScript,
	},
	"com.belmoussaoui.Authenticator": {
		name: "Authenticator",
		desc: "Generate Two-Factor Codes",
		lang: Lang.Rust,
	},
	"org.gnome.World.Secrets": {
		name: "Secrets",
		desc: "Manage your passwords",
		lang: Lang.Python,
	},
	"com.github.neithern.g4music": {
		name: "G4Music",
		desc: "Play your music elegantly",
		lang: Lang.Vala,
	},
	"io.github.diegopvlk.Dosage": {
		name: "Dosage",
		desc: "Keep track of your treatments",
		lang: Lang.JavaScript,
	},
	"org.gnome.Todo": {
		name: "Endeavour",
		desc: "Manage your tasks",
		lang: Lang.C,
	},
	"org.gnome.DejaDup": {
		name: "Déjà Dup Backups",
		desc: "Protect yourself from data loss",
		lang: Lang.Vala,
	},
	"de.haeckerfelix.AudioSharing": {
		name: "Audio Sharing",
		desc: "Share your computer audio",
		lang: Lang.Rust,
	},
	"org.zrythm.Zrythm": {
		name: "Zrythm",
		desc: "Digital audio workstation",
		lang: Lang.CPlusPlus,
	},
	"io.github.nate_xyz.Chromatic": {
		name: "Chromatic",
		desc: "Fine-tune your instruments",
		lang: Lang.Rust,
	},
	"org.nickvision.tagger": {
		name: "Tagger",
		desc: "Tag your music",
		lang: Lang.CSharp,
	},
	"app.drey.EarTag": {
		name: "Ear Tag",
		desc: "Edit audio file tags",
		lang: Lang.Python,
	},
	"io.github.celluloid_player.Celluloid": {
		name: "Celluloid",
		desc: "GTK+ frontend for mpv",
		lang: Lang.C,
	},
	"com.pojtinger.felicitas.Multiplex": {
		name: "Multiplex",
		desc: "Watch torrents with your friends",
		lang: Lang.Go,
	},
	"io.gitlab.adhami3310.Footage": {
		name: "Footage",
		desc: "Polish your videos",
		lang: Lang.Rust,
	},
	"io.github.seadve.Kooha": {
		name: "Kooha",
		desc: "Elegantly record your screen",
		lang: Lang.Rust,
	},
	"org.gnome.gitlab.YaLTeR.Identity": {
		name: "Identity",
		desc: "Compare images and videos",
		lang: Lang.Rust,
	},
	"io.github.nokse22.asciidraw": {
		name: "ASCII Draw",
		desc: "Draw using ASCII characters",
		lang: Lang.Python,
	},
	"dev.geopjr.Calligraphy": {
		name: "Calligraphy",
		desc: "Turn your text into ASCII banners",
		lang: Lang.Python,
	},
	"io.github.tfuxu.Halftone": {
		name: "Halftone",
		desc: "Give your images that pixel art-like style",
		lang: Lang.Python,
	},
	"io.github.dubstar_04.design": {
		name: "Design",
		desc: "2D CAD for GNOME",
		lang: Lang.JavaScript,
	},
	"io.github.dlippok.photometric-viewer": {
		name: "Photometry",
		desc: "View photometric files",
		lang: Lang.Python,
	},
	"com.rafaelmardojai.WebfontKitGenerator": {
		name: "Webfont Kit Generator",
		desc: "Create @font-face kits easily",
		lang: Lang.Python,
	},
	"nl.g4d.Girens": {
		name: "Girens for Plex",
		desc: "Watch your Plex content",
		lang: Lang.Python,
	},
	"io.github.bytezz.IPLookup": {
		name: "IP Lookup",
		desc: "Find info about an IP address",
		lang: Lang.Python,
	},
	"im.dino.Dino": {
		name: "Dino",
		desc: "Modern XMPP Chat Client",
		lang: Lang.Vala,
	},
	"org.gabmus.gfeeds": {
		name: "Feeds",
		desc: "News reader for GNOME",
		lang: Lang.Python,
	},
	"dev.geopjr.Tuba": {
		name: "Tuba",
		desc: "Browse the Fediverse",
		lang: Lang.Vala,
	},
	"re.sonny.Tangram": {
		name: "Tangram",
		desc: "Browser for your pinned tabs",
		lang: Lang.JavaScript,
	},
	"info.febvre.Komikku": {
		name: "Komikku",
		desc: "Read your favorite manga",
		lang: Lang.Python,
	},
	"se.sjoerd.Graphs": {
		name: "Graphs",
		desc: "Plot and manipulate data",
		lang: Lang.Python,
	},
	"com.github.cassidyjames.dippi": {
		name: "Dippi",
		desc: "Calculate display info like DPI and aspect ratio",
		lang: Lang.Vala,
	},
	"org.gabmus.whatip": {
		name: "What IP",
		desc: "Info on your IP",
		lang: Lang.Python,
	},
	"ir.imansalmani.IPlan": {
		name: "IPlan",
		desc: "Your plan for improving personal life and workflow",
		lang: Lang.Rust,
	},
	"com.feaneron.Boatswain": {
		name: "Boatswain",
		desc: "Control your Elgato Stream Decks",
		lang: Lang.C,
	},
	"garden.turtle.Jellybean": {
		name: "Stockpile",
		desc: "Manage inventories of various things",
		lang: Lang.Vala,
	},
	"org.gnome.Characters": {
		name: "Characters",
		desc: "Character map application",
		lang: Lang.C,
	},
	"com.clarahobbs.chessclock": {
		name: "Chess Clock",
		desc: "Time games of over-the-board chess",
		lang: Lang.Python,
	},
	"com.lakoliu.Furtherance": {
		name: "Furtherance",
		desc: "Track your time without being tracked",
		lang: Lang.Rust,
	},
	"io.github.lainsce.Khronos": {
		name: "Khronos",
		desc: "Log the time it took to do tasks",
		lang: Lang.Vala,
	},
	"re.sonny.Retro": {
		name: "Retro",
		desc: "A customizable retro digital segment clock",
		lang: Lang.JavaScript,
	},
	"com.github.vikdevelop.timer": {
		name: "Timer",
		desc: "Simple Countdown Timer",
		lang: Lang.Python,
	},
	"dev.edfloreshz.Done": {
		name: "Done",
		desc: "To-do lists reimagined",
		lang: Lang.Rust,
	},
	"io.github.dgsasha.Remembrance": {
		name: "Reminders",
		desc: "Set reminders for yourself",
		lang: Lang.Python,
	},
	"dev.geopjr.Collision": {
		name: "Collision",
		desc: "Check hashes for your files",
		lang: Lang.Crystal,
	},
	"pm.mirko.Atoms": {
		name: "Atoms",
		desc: "Manage Chroot and Containers",
		lang: Lang.Python,
	},
	"re.sonny.Playhouse": {
		name: "Playhouse",
		desc: "Playground for HTML/CSS/JavaScript",
		lang: Lang.JavaScript,
	},
	"org.gnome.World.Citations": {
		name: "Citations",
		desc: "Manage your bibliography",
		lang: Lang.Rust,
	},
	"com.felipekinoshita.Wildcard": {
		name: "Wildcard",
		desc: "Test your regular expressions",
		lang: Lang.Rust,
	},
	"de.philippun1.Snoop": {
		name: "Snoop",
		desc: "Snoop through your files",
		lang: Lang.Vala,
	},
	"me.iepure.devtoolbox": {
		name: "Dev Toolbox",
		desc: "Development tools at your fingertips",
		lang: Lang.Python,
	},
	"com.github.GradienceTeam.Gradience": {
		name: "Gradience",
		desc: "Change the look of Adwaita, with ease",
		lang: Lang.Python,
	},
	"re.sonny.Commit": {
		name: "Commit",
		desc: "Commit message editor",
		lang: Lang.JavaScript,
	},
	"io.github.lainsce.Emulsion": {
		name: "Emulsion",
		desc: "Stock up on colors",
		lang: Lang.Vala,
	},
	"org.gnome.design.IconLibrary": {
		name: "Icon Library",
		desc: "Symbolic icons for your apps",
		lang: Lang.Rust,
	},
	"io.github.nate_xyz.Paleta": {
		name: "Paleta",
		desc: "Generate color palettes with ease",
		lang: Lang.Python,
	},
	"org.gnome.design.SymbolicPreview": {
		name: "Symbolic Preview",
		desc: "Symbolics Made Easy",
		lang: Lang.Rust,
	},
	"com.hunterwittenborn.Celeste": {
		name: "Celeste",
		desc: "Sync your cloud files",
		lang: Lang.Rust,
	},
	"com.felipekinoshita.Kana": {
		name: "Kana",
		desc: "Learn Japanese characters",
		lang: Lang.Rust,
	},
	"com.ranfdev.Notify": {
		name: "Notify",
		desc: "Receive notifications from ntfy.sh.",
		lang: Lang.Rust,
	},
	"fr.sgued.ten_forward": {
		name: "Ten Forward",
		desc: "Configure port forwarding on your gateway through the NAT-PMP protocol.",
		lang: Lang.Rust,
	},
	"dev.zelikos.rollit": {
		name: "Roll-It",
		desc: "Roll the dice",
		lang: Lang.Rust,
	},
	"io.github.fkinoshita.Telegraph": {
		name: "Telegraph",
		desc: "Write and decode morse",
		lang: Lang.Python,
	},
	"com.gitlab.guillermop.MasterKey": {
		name: "Master Key",
		desc: "A password manager application",
		lang: Lang.Python,
	},
	"io.github.eminfedar.vaktisalah-gtk-rs": {
		name: "Vakt-i Salah",
		desc: "GTK4 version of Vakt-i Salah (Prayer Times)",
		lang: Lang.Rust,
	},
	"io.gitlab.azymohliad.WatchMate": {
		name: "Watchmate",
		desc: "Manage your PineTime",
		lang: Lang.Rust,
	},
	"io.github.diegoivan.pdf_metadata_editor": {
		name: "Paper Clip",
		desc: "Edit PDF document metadata",
		lang: Lang.Vala,
	},
	"org.gnome.Chess": {
		name: "Chess",
		desc: "Play the classic two-player board game of chess",
		lang: Lang.Vala,
	},
	"org.gnome.gitlab.cheywood.Iotas": {
		name: "Iotas",
		desc: "Simple note taking",
		lang: Lang.Python,
	},
	"de.k_bo.Televido": {
		name: "Televido",
		desc: "Access German-language public TV",
		lang: Lang.Rust,
	},
	"de.schmidhuberj.DieBahn": {
		name: "Railway",
		desc: "Travel with all your train information in one place",
		lang: Lang.Rust,
	},
	"com.belmoussaoui.ReadItLater": {
		name: "Read It Later",
		desc: "Save and read web articles",
		lang: Lang.Rust,
	},
	"so.libdb.dissent": {
		name: "Dissent",
		desc: "GTK4 Discord client in Go (formerly gtkcord4)",
		lang: Lang.Go,
	},
	"com.github.joseexposito.touche": {
		name: "Touché",
		desc: "Multi-touch Gestures",
		lang: Lang.JavaScript,
	},
	"it.mijorus.gearlever": {
		name: "Gear Level",
		desc: "Manage AppImages",
		lang: Lang.Python,
	},
	"im.bernard.Nostalgia": {
		name: "Nostalgia",
		desc: "Set historic GNOME Wallpapers",
		lang: Lang.Vala,
	},
	"io.github.vikdevelop.SaveDesktop": {
		name: "SaveDesktop",
		desc: "Save the current configuration of your desktop environment",
		lang: Lang.Python,
	},
	"io.frama.tractor.carburetor": {
		name: "Carburetor",
		desc: "The Onion Routing app",
		lang: Lang.Python,
	},
	"cool.ldr.lfy": {
		name: "lfy",
		desc: "Translation software for gnome",
		lang: Lang.Python,
	},
	"art.taunoerik.tauno-monitor": {
		name: "Tauno Monitor",
		desc: "Simple stand-alone serial port monitor",
		lang: Lang.Python,
	},
	"io.github.giantpinkrobots.varia": {
		name: "Varia",
		desc: "Download manager based on aria2",
		lang: Lang.Python,
	},
	"app.drey.Biblioteca": {
		name: "Biblioteca",
		desc: "Documentation viewer for GNOME",
		lang: Lang.JavaScript,
	},
	"org.gnome.Fractal": {
		name: "Fractal",
		desc: "Matrix group messaging app",
		lang: Lang.Rust,
	},
	"io.github.leolost2605.gradebook": {
		name: "Gradebook",
		desc: "Keep track of your grades",
		lang: Lang.Vala,
	},
	"io.github.alainm23.planify": {
		name: "Planify",
		desc: "Forget about forgetting things",
		lang: Lang.Vala,
	},
	"net.krafting.Playlifin": {
		name: "Playlifin",
		desc: "Convert Youtube Music playlists to Jellyfin playlists",
		lang: Lang.Python,
	},
	"dev.bragefuglseth.Fretboard": {
		name: "Fretboard",
		desc: "Look up guitar chords",
		lang: Lang.Rust,
	},
	"cafe.avery.Delfin": {
		name: "Delfin",
		desc: "Stream movies and TV shows from Jellyfin",
		lang: Lang.Rust,
	},
	"io.gitlab.daikhan.stable": {
		name: "Daikhan",
		desc: "Play Videos/Music with style",
		lang: Lang.Vala,
	},
	"io.github.FailurePoint.RandomNumberFive": {
		name: "Random Number Five",
		desc: "Random number generator for For the Linux desktop!",
		lang: Lang.Python,
	},
	"org.freedesktop.Bustle": {
		name: "Bustle",
		desc: "Draw sequence diagrams of D-Bus activity",
		lang: Lang.Rust,
	},
	"com.quexten.Goldwarden": {
		name: "Goldwarden",
		desc: "A Bitwarden compatible desktop client",
		lang: Lang.Go,
	},
	"com.github.johnfactotum.Foliate": {
		name: "Foliate",
		desc: "Read e-books in style",
		lang: Lang.JavaScript,
	},
	"app.drey.KeyRack": {
		name: "Key Rack",
		desc: "View and edit app secrets",
		lang: Lang.Rust,
	},
	"io.github.fizzyizzy05.binary": {
		name: "Binary",
		desc: "Number base converter, written in Python with GTK/Libadwaita",
		lang: Lang.Python,
	},
	"org.gaphor.Gaphor": {
		name: "Gaphor",
		desc: "Simple UML and SysML modeling tool",
		lang: Lang.Python,
	},
	"page.codeberg.libre_menu_editor.LibreMenuEditor": {
		name: "Main Menu",
		desc: "Customize the menu",
		lang: Lang.Python,
	},
	"io.github.fabrialberio.pinapp": {
		name: "PinApp",
		desc: "Create and edit application shortcuts",
		lang: Lang.Python,
	},
	"it.mijorus.whisper": {
		name: "Whisper",
		desc: "Listen to your mic",
		lang: Lang.Python,
	},
	"com.github.alexkdeveloper.forgetpass": {
		name: "Forgetpass",
		desc: "Simple password generator for websites",
		lang: Lang.Vala,
	},
	"de.schmidhuberj.tubefeeder": {
		name: "Pipeline",
		desc: "Follow video creators",
		lang: Lang.Rust,
	},
	"xyz.tytanium.DoorKnocker": {
		name: "Door Knocker",
		desc: "Check the availability of portals",
		lang: Lang.C,
	},
	"io.github.sigmasd.nosleep": {
		name: "Stimulator",
		desc: "Stop the desktop environment from sleeping",
		lang: Lang.JavaScript,
	},
	"io.github.idevecore.CurrencyConverter": {
		name: "Currency Converter",
		desc: "A simple currency converter using Google-based data",
		lang: Lang.Python,
	},
	"io.gitlab.idevecore.Pomodoro": {
		name: "Pomodoro",
		desc: "Pomodoro is a productivity-focused timer",
		lang: Lang.JavaScript,
	},
	"io.github.amit9838.weather": {
		name: "Weather",
		desc: "Beautiful and lightweight weather app",
		lang: Lang.Python,
	},
	"it.mijorus.collector": {
		name: "Collector",
		desc: "Drag and Drop to the next level",
		lang: Lang.Python,
	},
	"org.sigxcpu.Livi": {
		name: "Light Video",
		desc: "A simple GTK4 based video player for mobile phones",
		lang: Lang.C,
	},
	"net.krafting.PleasureDVR": {
		name: "Pleasure DVR",
		desc: "DVR for the Chaturbate website",
		lang: Lang.Python,
	},
	"io.github.unrud.RecentFilter": {
		name: "Recent Filter",
		desc: "Exclude files and folders from recently used files",
		lang: Lang.Python,
	},
	"io.github.davidoc26.wallpaper_selector": {
		name: "Wallpaper Selector",
		desc: "Downloads and applies wallpapers",
		lang: Lang.Rust,
	},
	"app.drey.Doggo": {
		name: "Doggo",
		desc: "Clicker and chance game",
		lang: Lang.C,
	},
	"com.github.tenderowl.frog": {
		name: "Frog",
		desc: "Extract text from images",
		lang: Lang.Python,
	},
	"xyz.slothlife.Jogger": {
		name: "Jogger",
		desc: "Fitness tracker",
		lang: Lang.Rust,
	},
	"com.github.rogercrocker.badabib": {
		name: "Bada Bib!",
		desc: "View and edit BibTeX entries",
		lang: Lang.Python,
	},
	"com.github.cassidyjames.clairvoyant": {
		name: "Clairvoyant",
		desc: "Ask questions, get psychic answers",
		lang: Lang.Vala,
	},
	"io.github.xverizex.RetroSpriteEditor": {
		name: "Retro Sprite",
		desc: "Pixel Editor for Retro Consoles",
		lang: Lang.C,
	},
	"io.github.phastmike.tags": {
		name: "Tags",
		desc: "Color logs based on tags",
		lang: Lang.Vala,
	},
	"io.github.santiagocezar.maniatic-launcher": {
		name: "Maniatic Launcher",
		desc: "A launcher for the decompilation of Retro Engine (v5)",
		lang: Lang.Python,
	},
	"io.github.Rirusha.Cassette": {
		name: "Cassette",
		desc: "Unofficial Yandex.Music client",
		lang: Lang.Vala,
	},
	"io.github.nokse22.minitext": {
		name: "Mini Text",
		desc: "Ephemeral scratch pad",
		lang: Lang.Python,
	},
	"io.github.nokse22.ultimate-tic-tac-toe": {
		name: "Ultimate Tic Tac Toe",
		desc: "(Tic Tac Toe)²",
		lang: Lang.Python,
	},
	"io.github.nokse22.inspector": {
		name: "Inspector",
		desc: "View information about your system",
		lang: Lang.Python,
	},
	"io.github.nokse22.trivia-quiz": {
		name: "Trivia Quiz",
		desc: "Respond to endless questions",
		lang: Lang.Python,
	},
	"io.github.nokse22.teleprompter": {
		name: "Teleprompter",
		desc: "Stay on track during speeches",
		lang: Lang.Python,
	},
	"me.ppvan.psequel": {
		name: "psequel",
		desc: "A simple SQL client",
		lang: Lang.Vala,
	},
	"dev.tchx84.Portfolio": {
		name: "Portfolio",
		desc: "Manage files on the go",
		lang: Lang.Python,
	},
	"io.github.dvlv.boxbuddyrs": {
		name: "BoxBuddy",
		desc: "A Graphical Distrobox Manager",
		lang: Lang.Rust,
	},
	"io.github.weclaw1.ScoreTracker": {
		name: "Score Tracker",
		desc: "Application for tracking player scores in card and board games",
		lang: Lang.Rust,
	},
	"dev.mufeed.Wordbook": {
		name: "Wordbook",
		desc: "Lookup definitions for any English term",
		lang: Lang.Python,
	},
	"com.github.huluti.Coulr": {
		name: "Coulr",
		desc: "Enjoy colors and feel happy",
		lang: Lang.Python,
	},
	"org.nicotine_plus.Nicotine": {
		name: "Nicotine+",
		desc: "Graphical client for the Soulseek network",
		lang: Lang.Python,
	},
	"dev.skynomads.Seabird": {
		name: "Seabird",
		desc: "Kubernetes desktop client",
		lang: Lang.Go,
	},
	"io.github.zefr0x.hashes": {
		name: "Hashes",
		desc: "Identify hashing algorithms",
		lang: Lang.Python,
	},
	"com.toolstack.Folio": {
		name: "Folio",
		desc: "Take notes in Markdown",
		lang: Lang.Vala,
	},
	"org.cvfosammmm.Lemma": {
		name: "Lemma",
		desc: "Note-Taking App",
		lang: Lang.Python,
	},
	"io.github.david_swift.Flashcards": {
		name: "Memorize",
		desc: "Study flashcards",
		lang: Lang.Swift,
	},
	"app.drey.Elastic": {
		name: "Elastic",
		desc: "Design spring animations",
		lang: Lang.Vala,
	},
	"com.github.geigi.cozy": {
		name: "Cozy",
		desc: "Listen to audio books",
		lang: Lang.Python,
	},
	"com.github.Darazaki.Spedread": {
		name: "Spedread",
		desc: "GTK speed reading software: Read like a speedrunner!",
		lang: Lang.Vala,
	},
	"im.bernard.Memorado": {
		name: "Memorado",
		desc: "Memorize anything",
		lang: Lang.Python,
	},
	"de.wagnermartin.Plattenalbum": {
		name: "Plattenalbum",
		desc: "Browse music with MPD",
		lang: Lang.Python,
	},
	"io.github.finefindus.Hieroglyphic": {
		name: "Hieroglyphic",
		desc: "Find LaTeX symbols",
		lang: Lang.Rust,
	},
	"com.core447.StreamController": {
		name: "StreamController",
		desc: "Control your Elgato Stream Decks with plugin support",
		lang: Lang.Python,
	},
	"org.gnome.gitlab.cheywood.Buffer": {
		name: "Buffer",
		desc: "Embrace ephemeral text",
		lang: Lang.Python,
	},
	"io.gitlab.leesonwai.Tactics": {
		name: "Tactics",
		desc: "Build your soccer lineup",
		lang: Lang.C,
	},
	"io.gitlab.leesonwai.Sums": {
		name: "Sums",
		desc: "Calculate with postfix notation",
		lang: Lang.C,
	},
	"io.github.halfmexican.Mingle": {
		name: "Mingle",
		desc: "Combine emojis with Google's Emoji Kitchen",
		lang: Lang.Vala,
	},
	"io.github.cleomenezesjr.aurea": {
		name: "Aurea",
		desc: "Flatpak metainfo banner previewer",
		lang: Lang.Python,
	},
	"org.gnome.gitlab.somas.Apostrophe": {
		name: "Apostrophe",
		desc: "Edit Markdown in style",
		lang: Lang.Python,
	},
	"app.drey.Damask": {
		name: "Damask",
		desc: "Automatic wallpapers from the Internet",
		lang: Lang.Vala,
	},
	"dev.tchx84.Gameeky": {
		name: "Gameeky",
		desc: "Play, create and learn",
		lang: Lang.Python,
	},
	"io.github.Foldex.AdwSteamGtk": {
		name: "AdwSteamGtk",
		desc: "Give Steam the Adwaita treatment",
		lang: Lang.Python,
	},
	"org.gnome.SimpleScan": {
		name: "Document Scanner",
		desc: "Make a digital copy of your photos and documents",
		lang: Lang.Vala,
	},
	"org.gnome.design.AppIconPreview": {
		name: "App Icon Preview",
		desc: "Tool for designing applications icons",
		lang: Lang.Rust,
	},
	"io.github.andreibachim.shortcut": {
		name: "Shortcut",
		desc: "Make app shortcuts",
		lang: Lang.Rust,
	},
	"io.github.mpobaschnig.Vaults": {
		name: "Vaults",
		desc: "Keep important files safe",
		lang: Lang.Rust,
	},
	"com.github.johnfactotum.QuickLookup": {
		name: "Quick Lookup",
		desc: "Look up words quickly",
		lang: Lang.JavaScript,
	},
	"io.github.fsobolev.TimeSwitch": {
		name: "Time Switch",
		desc: "Set a task to run after a timer",
		lang: Lang.Python,
	},
	"cz.ondrejkolin.Barcoder": {
		name: "Barcoder",
		desc: "Simple barcode generator also usable on smaller screens",
		lang: Lang.Rust,
	},
	"io.github.achetagames.epic_asset_manager": {
		name: "Epic Asset Manager",
		desc: "Manage your Epic assets",
		lang: Lang.Rust,
	},
	"org.gnome.gitlab.bazylevnik0.Convolution": {
		name: "Convolution",
		desc: "Maze escaping game",
		lang: Lang.JavaScript,
	},
	"xyz.safeworlds.hiit": {
		name: "Exercise Timer",
		desc: "Timer clock for high intensity interval training",
		lang: Lang.Rust,
	},
	"net.codelogistics.webapps": {
		name: "Web Apps",
		desc: "Install websites as apps",
		lang: Lang.Python,
	},
	"com.jeffser.Alpaca": {
		name: "Alpaca",
		desc: "An Ollama client",
		lang: Lang.Python,
	},
	"app.devsuite.Schemes": {
		name: "Schemes",
		desc: "Create syntax highlighting schemes",
		lang: Lang.C,
	},
	"nl.v0yd.Capsule": {
		name: "Capsule",
		desc: "Medication tracker",
		lang: Lang.JavaScript,
	},
	"garden.jamie.Morphosis": {
		name: "Morphosis",
		desc: "Convert your documents",
		lang: Lang.Python,
	},
	"app.fotema.Fotema": {
		name: "Fotema",
		desc: "Admire your photos",
		lang: Lang.Rust,
	},
	"org.gnome.Crosswords.Editor": {
		name: "Crossword Editor",
		desc: "Create crossword puzzles",
		lang: Lang.C,
	},
	"org.gnome.Crosswords": {
		name: "Crosswords",
		desc: "Solve crossword puzzles",
		lang: Lang.C,
	},
	"io.gitlab.cyberphantom52.sudoku_solver": {
		name: "Sudoku Solver",
		desc: "A simple Sudoku Sovler",
		lang: Lang.Rust,
	},
	"io.github.nokse22.Exhibit": {
		name: "Exhibit",
		desc: "Preview your 3D models",
		lang: Lang.Python,
	},
	"io.github.pieterdd.RcloneShuttle": {
		name: "Rclone Shuttle",
		desc: "Upload your files to anywhere",
		lang: Lang.Rust,
	},
	"io.gitlab.elescoute.spacelaunch": {
		name: "Space Launch",
		desc: "When will the next rocket soar to the skies?",
		lang: Lang.Vala,
	},
	"xyz.parlatype.Parlatype": {
		name: "Parlatype",
		desc: "Media player for transcription",
		lang: Lang.C,
	},
	"app.devsuite.Manuals": {
		name: "Manuals",
		desc: "Install, Browse, and Search Documentation",
		lang: Lang.C,
	},
	"dev.bragefuglseth.Keypunch": {
		name: "Keypunch",
		desc: "Practice your typing skills",
		lang: Lang.Rust,
	},
	"net.danigm.loop": {
		name: "Loop",
		desc: "A simple audio loop machine for GNOME",
		lang: Lang.Python,
	},
	"org.gnome.gitlab.ilhooq.Bookup": {
		name: "Bookup",
		desc: "Streamline notes with Markdown!",
		lang: Lang.C,
	},
	"io.github.lainsce.Countdown": {
		name: "Countdown",
		desc: "Track events until they happen or since they happened",
		lang: Lang.Vala,
	},
	"io.github.lainsce.DotMatrix": {
		name: "Dot Matrix",
		desc: "The creativity playground of lines and curves",
		lang: Lang.Vala,
	},
	"app.drey.Blurble": {
		name: "Blurble",
		desc: "Word guessing game",
		lang: Lang.Vala,
	},
	"me.sanchezrodriguez.passes": {
		name: "Passes",
		desc: "Manage your digital passes",
		lang: Lang.Python,
	},
	"de.hummdudel.Libellus": {
		name: "Libellus",
		desc: "View DnD information in style",
		lang: Lang.JavaScript,
	},
	"com.saivert.pwvucontrol": {
		name: "pwvucontrol",
		desc: "Volume control for pipewire",
		lang: Lang.Rust,
	},
	"app.devsuite.Ptyxis": {
		name: "Ptyxis",
		desc: "Container-oriented terminal",
		lang: Lang.C,
	},
	"io.github.smolblackcat.Progress": {
		name: "Progress",
		desc: "Kanban-style task organiser",
		lang: Lang.CPlusPlus,
	},
	"org.gnome.Sudoku": {
		name: "GNOME Sudoku",
		desc: "Test your logic skills in this number grid puzzle",
		lang: Lang.Vala,
	},
	"io.github.lo2dev.Echo": {
		name: "Echo",
		desc: "Ping websites",
		lang: Lang.Python,
	},
	"io.github.getnf.embellish": {
		name: "Embellish",
		desc: "Install nerd fonts",
		lang: Lang.Go,
	},
	"nl.emphisia.icon": {
		name: "Iconic",
		desc: "Easilly add icons on top of folders",
		lang: Lang.Rust,
	},
	"com.github.ztefn.haguichi": {
		name: "Haguichi",
		desc: "Manage your Hamachi networks",
		lang: Lang.Vala,
	},
};

export default Object.entries(APP_MAP)
	.map(([id, app]) => ({ id, ...app }))
	.sort((a, b) => a.name.localeCompare(b.name));
