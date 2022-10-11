const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  const pwd = document.querySelector('#password').value;
  const confirm_pwd = document.querySelector('#confirm_password').value;
  let pwds = document.querySelectorAll('input[type=password]');
  let span = document.querySelectorAll('.error');

  if (confirm_pwd != pwd) {
    pwds.forEach((p) => {
      p.style = 'border-color:red';
    });
    span.forEach((s) => {
      s.style = 'visibility:visible';
    });
  } else if (confirm_pwd == pwd) {
    pwds.forEach((p) => {
      p.style = 'border-color:green';
    });
    span.forEach((s) => {
      s.style = 'viibility:hidden';
    });
  }
});
