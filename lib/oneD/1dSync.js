module.exports.ascending = function mergeArray(array01)
{
	if(array01.length == 2)
	{
		if(array01[0] < array01[1])
			return array01;
		else
		{
			tmp = array01[0];
			array01[0] = array01[1];
			array01[1] = tmp;
			return array01;
		}
	}
	else if(array01.length == 1)
	{
		return array01;
	}
	else
	{
		var array02 = mergeArray(array01.slice(Math.floor(array01.length/2),array01.length));
		var array01 = mergeArray(array01.slice(0,Math.floor(array01.length/2)));
	}
		var array03 = [];
		ar01 = array01.length;
		ar02 = array02.length
		if(array01.length >= array02.length)
		{
			for(i=0;i< ar01+ar02;i++)
			{
				if(array01[0] <  array02[0])
				{
					array03.push(array01[0]);
					array01.shift();
				}
				else if(array01[0] ==  array02[0])
				{
					array03.push(array01[0]);
					array01.shift();
					
					array03.push(array02[0]);
					array02.shift();
				}
				else
				{
					array03.push(array02[0]);
					array02.shift();
				}
				if(array01.length == 0)
				{
					array03 = array03.concat(array02);
					break;
				}
				if(array02.length == 0)
				{
					array03 = array03.concat(array01);
					break;
				}
			}
			return array03;
		}
		else
		{
			for(i=0;i < ar02+ar01;i++)
			{
				if(array01[0] <  array02[0])
				{
					array03.push(array01[0]);
					array01.shift();
				}
				else if(array01[0] ==  array02[0])
				{
					array03.push(array01[0]);
					array01.shift();
					
					array03.push(array02[0]);
					array02.shift();
				}
				else
				{
					array03.push(array02[0]);
					array02.shift();
				}
				if(array01.length == 0)
				{
					array03 = array03.concat(array02);
					break;
				}
				if(array02.length == 0)
				{
					array03 = array03.concat(array01);
					break;
				}
			}
			return array03;
		}
}
module.exports.descending = function desmergeArray(array01)
{
	if(array01.length == 2)
	{
		if(array01[0] > array01[1])
			return array01;
		else
		{
			tmp = array01[0];
			array01[0] = array01[1];
			array01[1] = tmp;
			return array01;
		}
	}
	else if(array01.length == 1)
	{
		return array01;
	}
	else
	{
		var array02 = desmergeArray(array01.slice(Math.floor(array01.length/2),array01.length));
		var array01 = desmergeArray(array01.slice(0,Math.floor(array01.length/2)));
	}
		var array03 = [];
		ar01 = array01.length;
		ar02 = array02.length
		if(array01.length <= array02.length)
		{
			for(i=0;i < ar01+ar02;i++)
			{
				if(array01[0] >  array02[0])
				{
					array03.push(array01[0]);
					array01.shift();
				}
				else if(array01[0] ==  array02[0])
				{
					array03.push(array01[0]);
					array01.shift();
					
					array03.push(array02[0]);
					array02.shift();
				}
				else
				{
					array03.push(array02[0]);
					array02.shift();
				}
				if(array01.length == 0)
				{
					array03 = array03.concat(array02);
					break;
				}
				if(array02.length == 0)
				{
					array03 = array03.concat(array01);
					break;
				}
			}
			return array03;
		}
		else
		{
			for(i=0;i < ar02+ar01;i++)
			{
				if(array01[0] >  array02[0])
				{
					array03.push(array01[0]);
					array01.shift();
				}
				else if(array01[0] ==  array02[0])
				{
					array03.push(array01[0]);
					array01.shift();
					
					array03.push(array02[0]);
					array02.shift();
				}
				else
				{
					array03.push(array02[0]);
					array02.shift();
				}
				if(array01.length == 0)
				{
					array03 = array03.concat(array02);
					break;
				}
				if(array02.length == 0)
				{
					array03 = array03.concat(array01);
					break;
				}
			}
			return array03;
		}
}
