document.addEventListener('DOMContentLoaded', function () {
    const el = document.querySelector('.animate-title');
    const str = el.innerHTML.trim().split("");

  console.log(str);
    el.innerHTML = str.reduce((acc, curr) => {
        curr = curr.replace(/\s+/, '&nbsp;');
        return `${acc}<span class="char">${curr}</span>`;
    }, "");
});
