function display(n)
{
    document.getElementById('textarea').value+=n
}

function calculate()
{
    var c = document.getElementById('textarea').value
    var sol = eval(c)
    document.getElementById('textarea').value=sol
}

function clr()
{
    document.getElementById('textarea').value=''
}