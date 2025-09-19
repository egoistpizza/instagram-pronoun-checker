const pronouns = [
    "co","cos","e","ey","em","eir","fae","faee","he","him","his","she","her","hers",
    "mer","mers","ne","nir","nirs","nee","ner","ners","per","pers","they","them","theirs",
    "thon","thons","ve","ver","vis","vi","vir","xe","xem","xyr","ze","zie","zir","hir",
    "ella","elle","elli","su",
    "a","ele","ela","eles","elu","ile","o","os","seu","sua","seus",
    "dele","dela","deles","dile","delu","lo","la","los","no","na","nos",
    "elle","ellui","el","ul","ulle","il","iel","ille","ielle","i",
    "ol","olle","ael","al","son","sa","san","saon","lui",
    "er","ersie","el","en","em","enes","eos","et","es",
    "ihn","ihr","ihre","ios","ioi","ihrol","iks","ikses","ind","inds","per","as",
    "sein","sie","sier","sien","soi","sos","seinos","siem","sierer","sim","sin","sel","ser","sey","sif","sir",
    "dey","dem","denen","demm","deren","die","fae","faer",
    "hän","hen","ham","hem","han","zae","ze","zee","zet","zie","zier",
    "xier","xien","xies","xe","xer","xie","xieren","vii","bla","blas","nin",
    "dia",
    "o","onu","ona","onun",
    "se","sen","han","ham","hans","hun","henne","hennes","hen","hens",
    "hän","hänet","hänen",
    "de","vedkommende","dem","des","han","ham","hans","hun","hende","hendes",
    "ij","die","diens","hij","hem","haar","hen","hun","het","hjin","zji","xe","xem","xir",
    "en","ens","dem","deras","den","dess","dens","han","honom"
];

function decomposeWord(word, dict) {
    const n = word.length;
    const dp = new Array(n + 1).fill(Infinity);
    const prev = new Array(n + 1).fill(-1);
    dp[0] = 0;

    for (let i = 0; i < n; i++) {
        if (dp[i] === Infinity) continue;
        for (const p of dict) {
            const len = p.length;
            if (i + len <= n && word.substring(i, i + len) === p) {
                if (dp[i] + 1 < dp[i + len]) {
                    dp[i + len] = dp[i] + 1;
                    prev[i + len] = i;
                }
            }
        }
    }

    if (dp[n] === Infinity) return [];

    const result = [];
    for (let i = n; i > 0; i = prev[i]) {
        const j = prev[i];
        result.push(word.substring(j, i));
    }
    result.reverse();
    return result;
}

const wordInput = document.getElementById('wordInput');
const checkWordBtn = document.getElementById('checkWord');
const resultDiv = document.getElementById('result');
const showPronounsBtn = document.getElementById('showPronouns');
const pronounListDiv = document.getElementById('pronounList');

checkWordBtn.addEventListener('click', checkWord);
wordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkWord();
    }
});
showPronounsBtn.addEventListener('click', showPronounList);

function checkWord() {
    const word = wordInput.value.trim().toLowerCase();
    if (!word) {
        resultDiv.innerHTML = '<div class="error">⚠️ Lütfen bir kelime girin!</div>';
        return;
    }

    const parts = decomposeWord(word, pronouns);
    
    if (parts.length === 0) {
        resultDiv.innerHTML = `
            <div class="error">
                ❌ '<strong>${word}</strong>' pronounlarla yazılamaz.
            </div>
        `;
    } else {
        const partsList = parts.join('-');
        resultDiv.innerHTML = `
            <div class="success">
                ✅ '<strong>${word}</strong>' yazılabilir: 
                <div class="parts">${partsList}</div>
            </div>
        `;
    }
    
    resultDiv.style.display = 'block';
}

function showPronounList() {
    if (pronounListDiv.innerHTML === '') {
        let html = `<div class="pronoun-header">Pronoun Listesi (${pronouns.length} adet):</div>`;
        html += '<div class="pronouns">';
        
        pronouns.forEach((pronoun, index) => {
            html += `<span class="pronoun-item">${pronoun}</span>`;
        });
        
        html += '</div>';
        pronounListDiv.innerHTML = html;
        showPronounsBtn.textContent = 'Listeyi Gizle';
    } else {
        pronounListDiv.innerHTML = '';
        showPronounsBtn.textContent = 'Pronoun Listesini Göster';
    }
}

wordInput.addEventListener('input', () => {
    resultDiv.style.display = 'none';
});
