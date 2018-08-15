function print(string)
{
	var vowel_list = 'aeiouAEIOU';
	var vcount = 0;
	var vovels="";
	for(var i = 0; i < string.length ; i++)
	{
		if (vowel_list.indexOf(string[i]) !== -1)
		{
			vovels=vovels+string[i]+" ";
			vcount += 1;
			}
		}
	alert("The "+vcount+" vovels in the given string are : "+vovels);
}