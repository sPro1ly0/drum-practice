document.querySelectorAll('button').forEach(b => b.addEventListener('click', handleClick));

function handleClick() {
    alert('I got clicked');
}