function blog() {
    window.location.href = "blog.html";
}

function home() {
    window.location.href = "index.html";
}

function getInputValueById(id){
    const inputvalue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputvalue);
    return inputNumber;
}
function getTextValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumer = parseFloat(textValue);
    return textNumer;
}

const donate1Button = document.getElementById('donate1');
donate1Button.addEventListener('click', function(){

    const input1Balance = getInputValueById('input1'); 
    const nowaDonate = getTextValueById('nowa');
    const mainBalance = getTextValueById('main-balance');
    if(mainBalance >= input1Balance && input1Balance > 0){
    const nowaAmount = nowaDonate + input1Balance;
    document.getElementById('nowa').innerText = nowaAmount.toFixed(2);
    const newBalance = mainBalance - input1Balance;
    document.getElementById('main-balance').innerText = newBalance.toFixed(2);
    const cartOverlay = document.getElementById('cartOverlay');
    const closeCart = document.getElementById('closeCart');
    cartOverlay.classList.remove('hidden');
    closeCart.addEventListener('click', function(){
    cartOverlay.classList.add('hidden');
    document.getElementById('input1').value = '';
    });

    const div = document.createElement('div');
    div.classList.add('bg-white', 'border-2', 'rounded-lg', 'p-4');
    div.innerHTML = `
    <p class="md:text-xl font-bold">${input1Balance.toFixed(2)} Taka is Donated for Flood Relief in Noakhali, Bangladesh</p>
    <p class="text-sm text-para">Date: ${new Date().toString()}</p>
    `;
    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(div, historyContainer.firstChild);
    }
    else{
        document.getElementById('input1').value = '';
        alert('Failed to donate money');
    }
})


const donate2Button = document.getElementById('donate2');
donate2Button.addEventListener('click', function(){

    const input2Balance = getInputValueById('input2'); 
    const feniDonate = getTextValueById('feni');
    const mainBalance = getTextValueById('main-balance');   
    if(mainBalance >= input2Balance && input2Balance > 0){
    const feniAmount = feniDonate + input2Balance;
    document.getElementById('feni').innerText = feniAmount.toFixed(2);
    const newBalance = mainBalance - input2Balance;
    document.getElementById('main-balance').innerText = newBalance.toFixed(2);
    const cartOverlay = document.getElementById('cartOverlay');
    const closeCart = document.getElementById('closeCart');
    cartOverlay.classList.remove('hidden');
    closeCart.addEventListener('click', function(){
    cartOverlay.classList.add('hidden');
    document.getElementById('input2').value = '';
    });

    const div = document.createElement('div');
    div.classList.add('bg-white', 'border-2', 'rounded-lg', 'p-4');
    div.innerHTML = `
    <p class="md:text-xl font-bold">${input2Balance.toFixed(2)} Taka is Donated for Flood Relief in Feni, Bangladesh</p>
    <p class="text-sm text-para">Date: ${new Date().toString()}</p>
    `;
    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(div, historyContainer.firstChild);
    }
    else{
        document.getElementById('input2').value = '';
        alert('Failed to donate money');
    }  
})

const donate3Button = document.getElementById('donate3');
donate3Button.addEventListener('click', function(){

    const input3Balance = getInputValueById('input3'); 
    const aid1Donate = getTextValueById('aid1');
    const mainBalance = getTextValueById('main-balance');   
    if(mainBalance >= input3Balance && input3Balance > 0){
    const aid1Amount = aid1Donate + input3Balance;
    document.getElementById('aid1').innerText = aid1Amount.toFixed(2);
    const newBalance = mainBalance - input3Balance;
    document.getElementById('main-balance').innerText = newBalance.toFixed(2);
    const cartOverlay = document.getElementById('cartOverlay');
    const closeCart = document.getElementById('closeCart');
    cartOverlay.classList.remove('hidden');
    closeCart.addEventListener('click', function(){
    cartOverlay.classList.add('hidden');
    document.getElementById('input3').value = '';
    });

    const div = document.createElement('div');
    div.classList.add('bg-white', 'border-2', 'rounded-lg', 'p-4');
    div.innerHTML = `
    <p class="md:text-xl font-bold">${input3Balance.toFixed(2)} Taka is Donated for Aid for Injured in the Flood Affected People, Bangladesh</p>
    <p class="text-sm text-para">Date: ${new Date().toString()}</p>
    `;
    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(div, historyContainer.firstChild);
    }
    else{
        document.getElementById('input3').value = '';
        alert('Failed to donate money');
    }  
})

const donate4Button = document.getElementById('donate4');
donate4Button.addEventListener('click', function(){

    const input4Balance = getInputValueById('input4'); 
    const aid2Donate = getTextValueById('aid2');
    const mainBalance = getTextValueById('main-balance');   
    if(mainBalance >= input4Balance && input4Balance > 0){
    const aid2Amount = aid2Donate + input4Balance;
    document.getElementById('aid2').innerText = aid2Amount.toFixed(2);
    const newBalance = mainBalance - input4Balance;
    document.getElementById('main-balance').innerText = newBalance.toFixed(2);
    const cartOverlay = document.getElementById('cartOverlay');
    const closeCart = document.getElementById('closeCart');
    cartOverlay.classList.remove('hidden');
    closeCart.addEventListener('click', function(){
    cartOverlay.classList.add('hidden');
    document.getElementById('input4').value = '';
    });

    const div = document.createElement('div');
    div.classList.add('bg-white', 'border-2', 'rounded-lg', 'p-4');
    div.innerHTML = `
    <p class="md:text-xl font-bold">${input4Balance.toFixed(2)} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
    <p class="text-sm text-para">Date: ${new Date().toString()}</p>
    `;
    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(div, historyContainer.firstChild);
    }
    else{
        document.getElementById('input4').value = '';
        alert('Failed to donate money');
    }  
})

const historyTab = document.getElementById('history-tap')
const donationTab = document.getElementById('donation-tap')
historyTab.addEventListener('click', function(){
    historyTab.classList.add('text-black', 'bg-button');
    historyTab.classList.remove('text-para');
    donationTab.classList.remove('text-black', 'bg-button');
    donationTab.classList.add('text-para');
    document.getElementById('main-contain').classList.add('hidden');
    document.getElementById('history-list').classList.remove('hidden');
})

donationTab.addEventListener('click', function(){
    donationTab.classList.add('text-black', 'bg-button');
    donationTab.classList.remove('text-para');
    historyTab.classList.remove('text-black', 'bg-button');
    historyTab.classList.add('text-para');
    document.getElementById('history-list').classList.add('hidden');
    document.getElementById('main-contain').classList.remove('hidden');
})


