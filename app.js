const fname = document.getElementById('firstname');
const mobileno = document.getElementById('mobileno');
const email = document.getElementById('emailid');
const amount = document.getElementById('amount');
const submit = document.getElementById('submit-btn')
console.log(fname)
console.log(mobileno)
console.log(email)
console.log(amount)
window.ethereum
if (typeof window.ethereum !== 'undefined') {
  console.log('MetaMask is installed!');
}

submit.addEventListener('click', ()=> {
    let fullName = fname.value;
    let mobile = mobileno.value;
    let emailid = email.value;
    let money = amount.value;
    console.log(fullName)
    console.log(mobile)
    console.log(emailid)
    console.log(money)
    ethereum.request({ method: 'eth_requestAccounts' });
    addContent();
})

const donor1Name = document.getElementById('donor1Name')
const amount1Deposited = document.getElementById('amount1Deposited');

function addContent() {
    donor1Name.innerHTML = fname.value;
    amount1Deposited.innerHTML = amount.value;
}
