// ===== DATA =====
const avatars = [
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&auto=format&fit=crop'
];
const randomNames = ['Aiko Tanaka','Marcus Chen','Elena Rodriguez','Sarah Jenkins','David Kim', 'Maya Patel','Liam O\'Brien','Priya Sharma','Jordan Blake','Chloe Martin','Raj Kapoor','Nina Volkov'];
const randomMessages = [
    "This community has been so helpful for my daily routine! 💪",
    "Just completed my first week of adaptive exercises. Feeling amazing!",
    "Does anyone have tips for managing energy levels throughout the day?",
    "Thank you all for the incredible support. You are my second family. ❤️",
    "Sharing a great article I found on inclusive workplace design.",
    "Had a rough day, but reading everyone's stories here lifts me up.",
    "New to this group! Excited to connect with like-minded people.",
    "My physiotherapist recommended these stretches - they really work!",
    "Just want to say: you all inspire me every single day.",
    "Anyone attending the virtual meetup this Saturday?",
    "I finally got the accommodation I needed at work! Persistence pays off.",
    "Morning affirmation: I am capable, I am strong, I am enough. 🌟",
    "Great discussion yesterday on assistive technology — loved everyone's input.",
    "Tip: the new voice assistant update has been a game-changer for me.",
    "Sending positive vibes to everyone going through a tough time right now."
];

const communities = [
    // Accessibility & Support (Removed the main one as requested)
    {id:2, name:"Access Allies", category:"accessibility", members:"920", icon:"handshake", color:"text-blue-500", desc:"Connecting individuals with advocates and resource providers for better accessibility rights.", motto:"Stronger Together"},
    {id:3, name:"Barrier Breakers", category:"accessibility", members:"1.2k", icon:"gavel", color:"text-blue-700", desc:"A group dedicated to identifying and overcoming structural and societal barriers.", motto:"Breaking Constraints"},
    {id:4, name:"Freedom Navigators", category:"accessibility", members:"850", icon:"explore", color:"text-cyan-500", desc:"Focusing on travel and outdoor accessibility. Find the best routes and hidden gems.", motto:"Navigate Your Way"},
    {id:5, name:"Limitless Living", category:"accessibility", members:"1.1k", icon:"all_inclusive", color:"text-indigo-500", desc:"Tips and tricks for independent living and modifying home environments.", motto:"Life Without Limits"},
    {id:6, name:"Mobility Warriors", category:"accessibility", members:"750", icon:"accessible", color:"text-blue-400", desc:"Shared experiences and advice for wheelchair users and those with mobility aids.", motto:"Forward Motion"},

    // Emotional Support / Safe Space
    {id:7, name:"Safe Circle", category:"emotional", members:"2.1k", icon:"health_and_safety", color:"text-purple-600", desc:"A confidential, moderated group for sharing personal struggles and finding empathy.", motto:"Your Safe Place"},
    {id:8, name:"Stronger Together", category:"emotional", members:"1.8k", icon:"diversity_1", color:"text-purple-500", desc:"Peer support for those facing life's toughest emotional hurdles. We stand by you.", motto:"In This Together"},
    {id:9, name:"You’re Not Alone", category:"emotional", members:"3.4k", icon:"volunteer_activism", color:"text-pink-500", desc:"Mental health awareness and constant companionship in the journey of recovery.", motto:"Healing through Community"},
    {id:10, name:"Hope Hub", category:"emotional", members:"1.5k", icon:"wb_sunny", color:"text-orange-500", desc:"Finding the silver linings. Daily doses of positivity and hopeful stories.", motto:"Hold On, Pain Ends"},
    {id:11, name:"Inner Strength Space", category:"emotional", members:"900", icon:"self_improvement", color:"text-purple-400", desc:"Focusing on mindfulness, meditation, and building internal resilience.", motto:"Find Your Center"},

    // General Community / Social
    {id:12, name:"EmpowerAble Community", category:"general", members:"5.2k", icon:"groups", color:"text-primary", desc:"The main social hub of EmpowerAble. Meet everyone, join events, and stay updated.", motto:"The Heart of EmpowerAble"},
    {id:13, name:"Voices of Strength", category:"general", members:"1.3k", icon:"campaign", color:"text-green-600", desc:"A platform for sharing stories, hosting podcasts, and advocating through our own voices.", motto:"Heard and Empowered"},
    {id:14, name:"Rise Together Network", category:"general", members:"1.1k", icon:"keyboard_double_arrow_up", color:"text-green-500", desc:"Networking and socializing for personal and collective empowerment.", motto:"Rising Higher"},
    {id:15, name:"United Abilities", category:"general", members:"2.5k", icon:"diversity_3", color:"text-teal-600", desc:"Celebrating the diverse range of abilities within our global community.", motto:"Diversity is Power"},
    {id:16, name:"Beyond Limits", category:"general", members:"950", icon:"star", color:"text-amber-500", desc:"Sharing extraordinary achievements and everyday victories from across the globe.", motto:"No Boundary Too High"},

    // Emergency / Safety Based
    {id:17, name:"Rapid Support Network", category:"safety", members:"2.8k", icon:"bolt", color:"text-red-600", desc:"A quick-response community for urgent advice, safety check-ins, and local support.", motto:"Speed & Safety"},
    {id:18, name:"SOS Connect", category:"safety", members:"1.4k", icon:"emergency", color:"text-red-500", desc:"Coordinating emergency contacts and sharing real-time localized safety alerts.", motto:"Connected for Safety"},
    {id:19, name:"Safety Circle", category:"safety", members:"3.1k", icon:"shield", color:"text-red-700", desc:"General safety tips, personal security advice, and safe route planning.", motto:"Proactive Protection"},
    {id:20, name:"Guardian Network", category:"safety", members:"1.2k", icon:"security", color:"text-orange-600", desc:"A volunteer-based watch program for ensuring safe transit and community well-being.", motto:"Watchful Eyes"},

    // AI / Guidance Based
    {id:21, name:"Smart Assist Hub", category:"ai", members:"1.9k", icon:"smart_toy", color:"text-indigo-600", desc:"Discussions on the latest AI tools and how they enhance accessibility and daily living.", motto:"AI for Accessibility"},
    {id:22, name:"Guided Living", category:"ai", members:"1.1k", icon:"psychology_alt", color:"text-indigo-500", desc:"Sharing how to optimize personal AI assistants for a more independent life.", motto:"Intelligent Support"},
    {id:23, name:"Daily Support Circle", category:"ai", members:"800", icon:"auto_awesome", color:"text-violet-500", desc:"Focused on the tiny automated improvements that make a big difference in daily routines.", motto:"Small Wonders"}
];

const leaderProfiles = [
    {name:"Sarah Jenkins",role:"Accessibility Coach",bio:"10+ years helping individuals navigate workplace accommodations. Founded the first inclusive career fair in the region.",avatar:avatars[0],badge:"verified",posts:342},
    {name:"David Kim",role:"Tech Mentor",bio:"Software engineer passionate about building accessible applications. Mentors 20+ community members monthly.",avatar:avatars[1],badge:"verified",posts:287},
    {name:"Maya Patel",role:"Fitness Expert",bio:"Certified adaptive fitness trainer specializing in chair-based workouts and mobility recovery programs.",avatar:avatars[2],badge:"verified",posts:198},
    {name:"Liam O'Brien",role:"Wellness Advocate",bio:"Mental health counselor and community organizer. Runs weekly virtual support groups for 200+ members.",avatar:avatars[3],badge:"verified",posts:256}
];

const iconOptions = ['groups','favorite','star','local_fire_department','emoji_nature','psychology','self_improvement','diversity_3','volunteer_activism','health_and_safety','sunny','pets','music_note','palette','eco'];

let joinedSpaces = new Set();
let currentTab = 'discover';
let currentFilter = 'all';
let searchQuery = '';
let selectedIcon = 'groups';
let uploadedImage = null;
let activeChatId = null;
let chatMessages = {};

// ===== INIT =====
function init() {
    renderIconGrid();
    renderCommunities();
    renderLeaders();
    setupDiscussionTrigger();
}

// ===== SEARCH =====
function handleSearch(val) {
    searchQuery = val.toLowerCase().trim();
    renderCommunities();
}

// ===== TABS =====
function switchTab(tab, btn) {
    currentTab = tab;
    document.querySelectorAll('.tab-btn').forEach(b => {
        b.classList.remove('active-tab','bg-primary','text-white');
        b.classList.add('bg-card-beige','text-slate-700');
    });
    btn.classList.add('active-tab');
    btn.classList.remove('bg-card-beige','text-slate-700');
    document.getElementById('grid-title').textContent = tab === 'joined' ? 'Joined Communities' : 'All Communities';
    renderCommunities();
}

// ===== FILTERS =====
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('bg-primary','text-white');
            b.classList.add('bg-card-beige','text-slate-700');
        });
        btn.classList.add('bg-primary','text-white');
        btn.classList.remove('bg-card-beige','text-slate-700');
        currentFilter = btn.dataset.category;
        renderCommunities();
    });
});

// ===== RENDER COMMUNITIES =====
function renderCommunities() {
    const grid = document.getElementById('community-grid');
    const noRes = document.getElementById('no-results');
    if (!grid) return;
    grid.innerHTML = '';
    let filtered = communities.filter(c => {
        if (currentTab === 'joined' && !joinedSpaces.has(c.id)) return false;
        if (currentFilter !== 'all' && c.category !== currentFilter) return false;
        if (searchQuery && !c.name.toLowerCase().includes(searchQuery)) return false;
        return true;
    });
    if (filtered.length === 0) {
        noRes.classList.remove('hidden');
        grid.classList.add('hidden');
    } else {
        noRes.classList.add('hidden');
        grid.classList.remove('hidden');
        filtered.forEach(c => {
            const isJoined = joinedSpaces.has(c.id);
            const card = document.createElement('div');
            card.className = "bg-white dark:bg-slate-800/50 p-6 rounded-2xl border border-accent-gold/10 shadow-sm hover:shadow-md transition-all group";
            card.innerHTML = `
                <div class="flex justify-between items-start mb-4">
                    <div class="p-3 bg-slate-100 dark:bg-slate-700 rounded-xl ${c.color}"><span class="material-symbols-outlined text-3xl">${c.icon}</span></div>
                    <span class="text-xs font-bold text-slate-400 uppercase tracking-widest">${c.members} Members</span>
                </div>
                <h4 class="text-xl font-bold mb-1 group-hover:text-primary transition-colors">${c.name}</h4>
                ${c.motto ? `<p class="text-xs italic text-slate-400 mb-2">"${c.motto}"</p>` : ''}
                <p class="text-slate-600 dark:text-slate-400 text-sm mb-5">${c.desc}</p>
                <div class="flex gap-3">
                    <button onclick="toggleJoin(event,${c.id})" class="flex-1 py-2.5 rounded-xl border-2 transition-all font-bold text-sm ${isJoined?'bg-green-500 border-green-500 text-white':'border-primary text-primary hover:bg-primary hover:text-white'}">${isJoined?'✓ Joined':'Join Space'}</button>
                    ${isJoined ? `<button onclick="openChatModal(${c.id})" class="py-2.5 px-4 rounded-xl bg-primary/10 text-primary font-bold text-sm hover:bg-primary/20 transition-all flex items-center gap-1"><span class="material-symbols-outlined text-lg">chat</span></button>` : ''}
                </div>`;
            grid.appendChild(card);
        });
    }
}

// ===== JOIN / LEAVE =====
function toggleJoin(e, id) {
    e.stopPropagation();
    if (joinedSpaces.has(id)) joinedSpaces.delete(id);
    else joinedSpaces.add(id);
    renderCommunities();
}

// ===== CHAT MODAL =====
function generateRandomChat(communityId) {
    if (chatMessages[communityId]) return chatMessages[communityId];
    const msgs = [];
    const count = 5 + Math.floor(Math.random() * 6);
    for (let i = 0; i < count; i++) {
        const nameIdx = Math.floor(Math.random() * randomNames.length);
        const msgIdx = Math.floor(Math.random() * randomMessages.length);
        const avatarIdx = Math.floor(Math.random() * avatars.length);
        const mins = Math.floor(Math.random() * 120);
        msgs.push({
            id: Date.now() + i,
            name: randomNames[nameIdx],
            avatar: avatars[avatarIdx],
            text: randomMessages[msgIdx],
            time: mins < 60 ? `${mins}m ago` : `${Math.floor(mins/60)}h ago`,
            likes: Math.floor(Math.random() * 30),
            dislikes: Math.floor(Math.random() * 5),
            userLiked: false,
            userDisliked: false
        });
    }
    chatMessages[communityId] = msgs;
    return msgs;
}

function openChatModal(id) {
    activeChatId = id;
    const c = communities.find(x => x.id === id);
    if (!c) return;
    document.getElementById('chat-title').textContent = c.name;
    document.getElementById('chat-members').textContent = c.members + ' members';
    document.getElementById('chat-icon').innerHTML = `<span class="material-symbols-outlined">${c.icon}</span>`;
    generateRandomChat(id);
    renderChat();
    document.getElementById('chat-modal').classList.remove('hidden');
}
function closeChatModal() { document.getElementById('chat-modal').classList.add('hidden'); activeChatId = null; }

function renderChat() {
    const container = document.getElementById('chat-messages');
    const msgs = chatMessages[activeChatId] || [];
    container.innerHTML = msgs.map(m => `
        <div class="chat-bubble flex gap-3">
            <img src="${m.avatar}" class="w-9 h-9 rounded-full object-cover flex-shrink-0 mt-1" alt="">
            <div class="flex-1">
                <div class="flex items-center gap-2 mb-1"><span class="text-sm font-bold">${m.name}</span><span class="text-[11px] text-slate-400">${m.time}</span></div>
                <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">${m.text}</p>
                <div class="flex items-center gap-3 mt-2">
                    <button onclick="likeMsg(${m.id})" class="like-btn ${m.userLiked?'active-like':''} flex items-center gap-1 text-xs text-slate-400 hover:text-primary transition-colors"><span class="material-symbols-outlined text-base">thumb_up</span><span>${m.likes}</span></button>
                    <button onclick="dislikeMsg(${m.id})" class="dislike-btn ${m.userDisliked?'active-dislike':''} flex items-center gap-1 text-xs text-slate-400 hover:text-red-500 transition-colors"><span class="material-symbols-outlined text-base">thumb_down</span><span>${m.dislikes}</span></button>
                </div>
            </div>
        </div>
    `).join('');
    container.scrollTop = container.scrollHeight;
}

function likeMsg(msgId) {
    const msgs = chatMessages[activeChatId];
    const m = msgs.find(x => x.id === msgId);
    if (!m) return;
    if (m.userLiked) { m.likes--; m.userLiked = false; }
    else { m.likes++; m.userLiked = true; if (m.userDisliked) { m.dislikes--; m.userDisliked = false; } }
    renderChat();
}
function dislikeMsg(msgId) {
    const msgs = chatMessages[activeChatId];
    const m = msgs.find(x => x.id === msgId);
    if (!m) return;
    if (m.userDisliked) { m.dislikes--; m.userDisliked = false; }
    else { m.dislikes++; m.userDisliked = true; if (m.userLiked) { m.likes--; m.userLiked = false; } }
    renderChat();
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const text = input.value.trim();
    if (!text || !activeChatId) return;
    chatMessages[activeChatId].push({
        id: Date.now(),
        name: 'You',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&auto=format&fit=crop',
        text: text,
        time: 'Just now',
        likes: 0, dislikes: 0, userLiked: false, userDisliked: false
    });
    input.value = '';
    renderChat();
}

// ===== CREATE MODAL =====
function openCreateModal() { document.getElementById('create-modal').classList.remove('hidden'); }
function closeCreateModal() {
    document.getElementById('create-modal').classList.add('hidden');
    document.getElementById('new-comm-name').value = '';
    document.getElementById('new-comm-motto').value = '';
    document.getElementById('new-comm-desc').value = '';
    document.getElementById('upload-preview').classList.add('hidden');
    uploadedImage = null;
    selectedIcon = 'groups';
    renderIconGrid();
}

function renderIconGrid() {
    const grid = document.getElementById('icon-grid');
    if (!grid) return;
    grid.innerHTML = iconOptions.map(ic => `
        <div class="icon-pick ${ic===selectedIcon?'selected':''}" onclick="pickIcon('${ic}')">
            <span class="material-symbols-outlined text-primary">${ic}</span>
        </div>
    `).join('');
}
function pickIcon(ic) {
    selectedIcon = ic;
    uploadedImage = null;
    document.getElementById('upload-preview').classList.add('hidden');
    renderIconGrid();
}
function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
        uploadedImage = ev.target.result;
        document.getElementById('preview-img').src = uploadedImage;
        document.getElementById('upload-preview').classList.remove('hidden');
        selectedIcon = null;
        document.querySelectorAll('.icon-pick').forEach(el => el.classList.remove('selected'));
    };
    reader.readAsDataURL(file);
}

function createNewCommunity() {
    const name = document.getElementById('new-comm-name').value.trim();
    const motto = document.getElementById('new-comm-motto').value.trim();
    const desc = document.getElementById('new-comm-desc').value.trim();
    const type = document.getElementById('new-comm-type').value;
    if (!name || !desc) return alert('Please fill in name and description.');
    const newId = communities.length + 1;
    communities.push({
        id: newId, name, category: type, members: '1', icon: selectedIcon || 'groups',
        color: 'text-primary', desc, motto
    });
    joinedSpaces.add(newId);
    closeCreateModal();
    renderCommunities();
}

// ===== LEADERS =====
function renderLeaders(showAll) {
    const list = document.getElementById('leaders-list');
    if (!list) return;
    const display = showAll ? leaderProfiles : leaderProfiles.slice(0, 4);
    list.innerHTML = display.map(l => `
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
                <img src="${l.avatar}" class="h-10 w-10 rounded-full object-cover border border-slate-200" alt="${l.name}">
                <div>
                    <p class="text-sm font-bold">${l.name}</p>
                    <p class="text-[10px] text-slate-500 uppercase">${l.role}</p>
                </div>
            </div>
            <span class="material-symbols-outlined text-primary">verified</span>
        </div>
    `).join('');
}
function showAllLeaders() {
    const list = document.getElementById('leaders-list');
    if (!list) return;
    list.innerHTML = leaderProfiles.map(l => `
        <div class="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
            <img src="${l.avatar}" class="h-12 w-12 rounded-full object-cover border-2 border-primary/20 flex-shrink-0" alt="${l.name}">
            <div class="flex-1">
                <div class="flex items-center gap-1 mb-0.5"><p class="text-sm font-bold">${l.name}</p><span class="material-symbols-outlined text-primary text-sm">verified</span></div>
                <p class="text-[10px] text-slate-500 uppercase mb-1">${l.role} · ${l.posts} posts</p>
                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">${l.bio}</p>
            </div>
        </div>
    `).join('');
}

// ===== NEW DISCUSSIONS TRIGGER =====
const DISCUSSION_REPLIES = {
    "travel": [
        { author: "Elena R.", text: "VoiceOver on iOS is great for navigation.", avatar: avatars[2] },
        { author: "Marcus C.", text: "The 'Be My Eyes' app for remote visual assistance.", avatar: avatars[1] },
        { author: "Sarah J.", text: "Wheelmap.org is a lifesaver for finding accessible spots.", avatar: avatars[0] }
    ],
    "emergency": [
        { author: "David K.", text: "Keep a list of local emergency numbers near your door.", avatar: avatars[3] },
        { author: "Maya P.", text: "Establish a 'safety buddy' to call every morning.", avatar: avatars[4] },
        { author: "Liam O.", text: "Register with your local fire department as a priority resident.", avatar: avatars[5] }
    ],
    "ai": [
        { author: "TechGuru", text: "The new voice recognition is way faster than before.", avatar: avatars[1] },
        { author: "Aiko T.", text: "The 'Lookout' feature in Google Assistant is incredibly accurate now.", avatar: avatars[5] },
        { author: "Nina V.", text: "I love how it integrates with smart home devices for hands-free control.", avatar: avatars[4] }
    ],
    "support": [
        { author: "Chloe M.", text: "Looking forward to it! The last session was so healing.", avatar: avatars[5] },
        { author: "Raj K.", text: "I'll be there, I have some updates on the local council meeting.", avatar: avatars[2] },
        { author: "Jordan B.", text: "Is there a specific theme for tonight's session?", avatar: avatars[3] }
    ],
    "profile": [
        { author: "Aiko T.", text: "Go to Settings > Profile > Accessibility Features to toggle high contrast.", avatar: avatars[5] },
        { author: "Elena R.", text: "You can increase the text size up to 200% in the app settings.", avatar: avatars[2] },
        { author: "Sarah J.", text: "Try the 'Navigation Mode' for audio-guided route planning.", avatar: avatars[0] }
    ],
    "accessibility": [
        { author: "Alex W.", text: "Main Street now has revamped curbs at every intersection.", avatar: avatars[1] },
        { author: "Liam O.", text: "The north entrance of the City Mall is permanently ramp-accessible now.", avatar: avatars[3] },
        { author: "Marcus C.", text: "Avoid 4th Ave for a bit, there's construction blocking the accessible path.", avatar: avatars[4] }
    ]
};

function setupDiscussionTrigger() {
    const trigger = document.getElementById('discussions-trigger');
    if (trigger) {
        trigger.onclick = () => {
            openDiscussionModal();
        };
    }
}

function openDiscussionModal() {
    const discussions = [
        { id: "travel", title: "Best accessibility tools for travel?", author: "WorldTraveler", repliesCount: 15, category: "General" },
        { id: "emergency", title: "Emergency safety check-in procedure", author: "SafetyFirst", repliesCount: 42, category: "Safety" },
        { id: "ai", title: "New AI assistant updates - anyone tried them?", author: "TechGuru", repliesCount: 28, category: "AI Guidance" },
        { id: "support", title: "Support group meeting tonight at 6PM", author: "CaringManager", repliesCount: 12, category: "Empathetic" },
        { id: "profile", title: "How to customize my accessibility profile?", author: "NewbieUser", repliesCount: 5, category: "Support" },
        { id: "accessibility", title: "Barrier-free routes in Downtown", author: "AlexWalker", repliesCount: 33, category: "Accessibility" }
    ];

    const modal = document.createElement('div');
    modal.id = 'discussion-modal';
    modal.className = "fixed inset-0 bg-black/60 backdrop-blur-sm z-[4000] flex items-center justify-center p-4";
    modal.innerHTML = `
        <div class="bg-white dark:bg-slate-900 rounded-3xl w-full max-w-xl shadow-2xl p-8 slide-up relative overflow-hidden" id="discussion-content">
            <div id="discussion-list">
                <div class="flex items-center justify-between mb-6">
                    <h3 class="text-2xl font-bold">New Discussions</h3>
                    <button onclick="this.closest('#discussion-modal').remove()" class="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl"><span class="material-symbols-outlined">close</span></button>
                </div>
                <div class="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                    ${discussions.map(d => `
                        <div onclick="openDiscussionDetail('${d.id}', '${d.title.replace(/'/g, "\\'")}', '${d.author}')" class="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-primary/30 transition-all cursor-pointer">
                            <div class="flex justify-between items-start mb-1">
                                <h4 class="font-bold text-slate-900 dark:text-white">${d.title}</h4>
                                <span class="text-[10px] px-2 py-0.5 bg-primary/10 text-primary rounded-full uppercase font-bold">${d.category}</span>
                            </div>
                            <div class="flex items-center gap-3 text-xs text-slate-500">
                                <span>By ${d.author}</span>
                                <span>•</span>
                                <span>${d.repliesCount} replies</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <button onclick="this.closest('#discussion-modal').remove()" class="w-full mt-6 py-3 bg-primary text-white rounded-xl font-bold">Close</button>
            </div>
            <div id="discussion-detail" class="hidden h-full">
                <!-- Detail content will be injected here -->
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function openDiscussionDetail(id, title, author) {
    const list = document.getElementById('discussion-list');
    const detail = document.getElementById('discussion-detail');
    const replies = DISCUSSION_REPLIES[id] || [];

    list.classList.add('hidden');
    detail.classList.remove('hidden');

    detail.innerHTML = `
        <div class="flex items-center gap-3 mb-6">
            <button onclick="backToDiscussionList()" class="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl"><span class="material-symbols-outlined">arrow_back</span></button>
            <h3 class="text-xl font-bold line-clamp-1">${title}</h3>
        </div>
        <div class="p-4 bg-primary/5 border border-primary/10 rounded-2xl mb-6">
            <p class="text-xs text-primary font-bold mb-1 uppercase">Original Post by ${author}</p>
            <p class="text-slate-800 dark:text-slate-200">${title}</p>
        </div>
        <div class="space-y-4 max-h-[45vh] overflow-y-auto pr-2 mb-6">
            <p class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Replies</p>
            ${replies.map(r => `
                <div class="flex gap-3 bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-100 dark:border-slate-700">
                    <img src="${r.avatar}" class="w-8 h-8 rounded-full object-cover">
                    <div>
                        <p class="text-xs font-bold mb-0.5">${r.author}</p>
                        <p class="text-sm text-slate-600 dark:text-slate-400">${r.text}</p>
                    </div>
                </div>
            `).join('')}
        </div>
        <div class="flex gap-2">
            <input type="text" placeholder="Add a reply..." class="flex-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-sm focus:outline-none focus:border-primary">
            <button class="bg-primary text-white p-3 rounded-xl"><span class="material-symbols-outlined">send</span></button>
        </div>
    `;
}

function backToDiscussionList() {
    document.getElementById('discussion-list').classList.remove('hidden');
    document.getElementById('discussion-detail').classList.add('hidden');
}

// ===== START =====
init();
