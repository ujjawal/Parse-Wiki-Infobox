function foo()
{
    var script=document.createElement('script');
    script.type='text/javascript';
    script.src = 'http://en.wikipedia.org/w/api.php?format=json&action=query' +
                 '&prop=revisions&titles=' +
                 encodeURIComponent("The Social Network") +
                 '&rvprop=content&rvsection=0&callback=parseWiki';
    scriptDiv = document.getElementById('wikicontent');
    scriptDiv.innerHTML = '';
    scriptDiv.appendChild(script)
    window.parseWiki = function(result)
    {
        var key = 0;
        for(i in result.query.pages)
        key = i
        content = result.query.pages[key].revisions[0]['*'];
        v = content.match(/{{[^]*?({{[^{}]*?}}[^]*?)*}}/g);
        foo = v[0].match(/\[\[([^\]]*)\]\]/g);
        arr = [];
        for(i=0;i<foo.length;i++) { 
            arr.push(foo[i].match(/[A-Za-z].*[^\]]/)[0]);
            anchor = document.createElement('a');
            anchor.innerHTML = arr[i];
            anchor.href = '#';
            scriptDiv.appendChild(anchor);
        }
    }
}
