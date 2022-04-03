const katakana =
{
    a : 'ｱ',
    e : 'エ',
    i : 'イ',
    o : 'オ',
    u : 'ウ',

    ka: 'カ',
    ke: 'ケ',
    ki: 'キ',
    ko: 'コ',
    ku: 'ク',

    sa: 'サ',
    se: 'せ',
    si: 'シ',
    so: 'ソ',
    su: 'ス',

    ta: 'タ',
    te: 'テ',
    ti: 'チ',
    to: 'ト',
    tu: 'ツ',

    na: 'ナ',
    ne: 'ネ',
    ni: 'ニ',
    no: 'ノ',
    nu: 'ヌ',

    ha: 'ハ',
    he: 'ヘ',
    hi: 'ヒ',
    ho: 'ホ',
    hu: 'フ',

    ma: 'マ',
    me: 'メ',
    mi: 'ミ',
    mo: 'モ',
    mu: 'ム',

    ya: 'ヤ',
    ye: '  ',
    yi: '  ',
    yo: 'ヨ',
    yu: 'ユ',
    
    ra: 'ラ',
    re: 'レ',
    ri: 'リ',
    ro: 'ロ',
    ru: 'ル',

    wa: 'ワ',
    we: 'ヱ',
    wi: 'ヰ',
    wo: 'ヲ',
    wu: '  ',

    na: 'ン',
}
const container = document.querySelector(".container-katakana");

function FindKataka(id){
    
    for(let symbol in katakana)
    {
        let kataico = container.querySelector(`#th-item-katakana-${symbol}`);
        kataico.setAttribute('katakanaup','false');
    }
    if(katakana.hasOwnProperty(id))
    {
        let kataico = container.querySelector(`#th-item-katakana-${id}`);
        kataico.setAttribute('katakanaup','true');
    }
}

function createKatakana(nm,sym){
    Katakananame = `<h3 class = "${nm}-item-katakanaSymbol item-katakanaSymbol" id = "${nm}">${nm}</h3>`;
    Katakanasymbol = `<h1 class = "${nm}-item-katakanaSymbol item-katakanaSymbol" id = "${sym}">${sym}</h1>`;
    return [Katakananame,Katakanasymbol];
}

let docFrag = document.createDocumentFragment();
let tabindex = 0;
let katakanaTR;


//update

for(let symbol in katakana){
    let cKatakana;
    if(tabindex % 10 == 0)
    {
        if(tabindex != 0){
            docFrag.append(katakanaTR)
        }
        
        katakanaTR = document.createElement("TR");
        katakanaTR.classList.add(`tr-item-katakana`);
    }
    tabindex+=1;
    
    
    let katakanaTH = document.createElement("TH");

    katakanaTH.tabIndex = tabindex;
    katakanaTH.classList.add(`th-item-katakana`)
    katakanaTH.id = `th-item-katakana-${symbol}`;

    katakanaTH.setAttribute('katakanaup',false);
    
    cKatakana = createKatakana(symbol,katakana[symbol])
    katakanaTH.innerHTML = cKatakana[0] + cKatakana[1];
    katakanaTR.append(katakanaTH);
}

docFrag.append(katakanaTR)
katakanaTR = document.createElement("TR");
katakanaTR.classList.add(`tr-item-katakana`);
container.appendChild(docFrag);