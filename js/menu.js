

function pamoubt(key = '') {
    if (!key) {
        return false;
    }

    let target = document.getElementById(key);
    if (!target) {
        return false;
    }

    let qty = parseInt(target.dataset.qty) || 0;
    if (qty >= 10) {
        alert('數量不可大於10件');
        qty = 10;
    } else {
        qty += 1;
    }

    console.log(target.dataset.price);
    target.dataset.qty = qty;
    target.innerText = qty;
}

function mamoubt(key = '') {
    if (!key) {
        return false;
    }

    let target = document.getElementById(key);
    if (!target) {
        return false;
    }

    let qty = parseInt(target.dataset.qty) || 0;
    if (qty <= 0) {
        alert('數量已為 0 件');
        qty = 0;
    } else {
        qty -= 1;
    }

    console.log(target.dataset.price);
    target.dataset.qty = qty;
    target.innerText = qty;
}

function total(key = '') {
    if (!key) {
        return false;
    }

    let target = document.getElementById(key);
    if (!target) {
        return false;
    }

    let qty = parseInt(target.dataset.qty)*price;

    console.log(target.dataset.price);
    target.dataset.qty = qty;
    target.innerText = qty;
}


