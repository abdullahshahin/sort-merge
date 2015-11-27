var mergeObject = {};

mergeObject.ascending = function (array01,key)
{
	if(key == undefined)
		key = 'x';
	if(array01.length == 2)
	{
		if(Math.abs(array01[0][key]) < Math.abs(array01[1][key]))
			return array01;
		else
		{
			tmp = {x:0,y:0};
			tmp.x = array01[0].x;
			tmp.y = array01[0].y;
			if(array01[0].data != undefined)
				tmp['data'] = array01[0].data;
			
			array01[0].x = array01[1].x;
			array01[0].y = array01[1].y;
			if(array01[0].data != undefined)
				array01[0].data = array01[1].data;
			
			array01[1].x = tmp.x;
			array01[1].y = tmp.y;
			if(array01[0].data != undefined)
				array01[1].data = tmp.data;
			
			return array01;
		}
	}
	else if(array01.length == 1)
	{
		return array01;
	}
	else
	{
		var array02 = mergeObject.ascending(array01.slice(Math.floor(array01.length/2),array01.length),key);
		var array01 = mergeObject.ascending(array01.slice(0,Math.floor(array01.length/2)),key);
	}
		var array03 = [];
		ar01 = array01.length;
		ar02 = array02.length
		if(array01.length >= array02.length)
		{
			for(i=0;i< ar01+ar02;i++)
			{
				if(Math.abs(array01[0][key]) < Math.abs(array02[0][key]))
				{
					array03.push(array01[0]);
					array01.shift();
				}
				else if(Math.abs(array01[0][key]) == Math.abs(array02[0][key]))
				{
					if(array01[0].x < array02[0].x)
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
						
						array03.push(array01[0]);
						array01.shift();
					}
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
				if(Math.abs(array01[0][key]) < Math.abs(array02[0][key]))
				{
					array03.push(array01[0]);
					array01.shift();
				}
				else if(Math.abs(array01[0][key]) == Math.abs(array02[0][key]))
				{
					if(array01[0].x < array02[0].x)
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
						
						array03.push(array01[0]);
						array01.shift();
					}
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
mergeObject.descending = function (array01,key)
{
	if(key == undefined)
		key = 'x';
	if(array01.length == 2)
	{
		if(Math.abs(array01[0][key]) > Math.abs(array01[1][key]))
			return array01;
		else
		{
			tmp = {x:0,y:0};
			tmp.x = array01[0].x;
			tmp.y = array01[0].y;
			if(array01[0].data != undefined)
				tmp['data'] = array01[0].data;
			
			array01[0].x = array01[1].x;
			array01[0].y = array01[1].y;
			if(array01[0].data != undefined)
				array01[0].data = array01[1].data;
			
			array01[1].x = tmp.x;
			array01[1].y = tmp.y;
			if(array01[0].data != undefined)
				array01[1].data = tmp.data;
			
			return array01;
		}
	}
	else if(array01.length == 1)
	{
		return array01;
	}
	else
	{
		var array02 = mergeObject.descending(array01.slice(Math.floor(array01.length/2),array01.length),key);
		var array01 = mergeObject.descending(array01.slice(0,Math.floor(array01.length/2)),key);
	}
		var array03 = [];
		ar01 = array01.length;
		ar02 = array02.length
		if(array01.length <= array02.length)
		{
			for(i=0;i< ar01+ar02;i++)
			{
				if(Math.abs(array01[0][key]) > Math.abs(array02[0][key]))
				{
					array03.push(array01[0]);
					array01.shift();
				}
				else if(Math.abs(array01[0][key]) == Math.abs(array02[0][key]))
				{
					if(array01[0].x > array02[0].x)
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
						
						array03.push(array01[0]);
						array01.shift();
					}
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
				if(Math.abs(array01[0][key]) > Math.abs(array02[0][key]))
				{
					array03.push(array01[0]);
					array01.shift();
				}
				else if(Math.abs(array01[0][key]) == Math.abs(array02[0][key]))
				{
					if(array01[0].x > array02[0].x)
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
						
						array03.push(array01[0]);
						array01.shift();
					}
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
module.exports.mergeObject = mergeObject;
var mergeArray = {};

mergeArray.ascending = function(array01,key)
{
	if(key == undefined)
		key = 0;
	if(array01.length == 2)
	{
		if(Math.abs(array01[0][key]) < Math.abs(array01[1][key]))
			return array01;
		else
		{
			tmp = [];
			tmp[0] = array01[0][0];
			tmp[1] = array01[0][1];
			
			array01[0][0] = array01[1][0];
			array01[0][1] = array01[1][1];
			
			array01[1][0] = tmp[0];
			array01[1][1] = tmp[1];
			
			return array01;
		}
	}
	else if(array01.length == 1)
	{
		return array01;
	}
	else
	{
		var array02 = mergeArray.ascending(array01.slice(Math.floor(array01.length/2),array01.length),key);
		var array01 = mergeArray.ascending(array01.slice(0,Math.floor(array01.length/2)),key);
	}
		var array03 = [];
		ar01 = array01.length;
		ar02 = array02.length
		if(array01.length >= array02.length)
		{
			for(i=0;i< ar01+ar02;i++)
			{
				if(Math.abs(array01[0][key]) < Math.abs(array02[0][key]))
				{
					array03.push(array01[0]);
					array01.shift();
				}
				else if(Math.abs(array01[0][key]) == Math.abs(array02[0][key]))
				{
					if(array01[0][0] < array02[0][0])
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
						
						array03.push(array01[0]);
						array01.shift();
					}
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
				if(Math.abs(array01[0][key]) < Math.abs(array02[0][key]))
				{
					array03.push(array01[0]);
					array01.shift();
				}
				else if(Math.abs(array01[0][key]) == Math.abs(array02[0][key]))
				{
					if(array01[0][0] < array02[0][0])
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
						
						array03.push(array01[0]);
						array01.shift();
					}
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
mergeArray.descending = function(array01,key)
{
	if(key == undefined)
		key = 0;
	if(array01.length == 2)
	{
		if(Math.abs(array01[0][key]) > Math.abs(array01[1][key]))
			return array01;
		else
		{
			tmp = [];
			tmp[0] = array01[0][0];
			tmp[1] = array01[0][1];
			
			array01[0][0] = array01[1][0];
			array01[0][1] = array01[1][1];
			
			array01[1][0] = tmp[0];
			array01[1][1] = tmp[1];
			
			return array01;
		}
	}
	else if(array01.length == 1)
	{
		return array01;
	}
	else
	{
		var array02 = mergeArray.descending(array01.slice(Math.floor(array01.length/2),array01.length),key);
		var array01 = mergeArray.descending(array01.slice(0,Math.floor(array01.length/2)),key);
	}
		var array03 = [];
		ar01 = array01.length;
		ar02 = array02.length
		if(array01.length <= array02.length)
		{
			for(i=0;i< ar01+ar02;i++)
			{
				if(Math.abs(array01[0][key]) > Math.abs(array02[0][key]))
				{
					array03.push(array01[0]);
					array01.shift();
				}
				else if(Math.abs(array01[0][key]) == Math.abs(array02[0][key]))
				{
					if(array01[0][0] > array02[0][0])
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
						
						array03.push(array01[0]);
						array01.shift();
					}
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
				if(Math.abs(array01[0][key]) > Math.abs(array02[0][key]))
				{
					array03.push(array01[0]);
					array01.shift();
				}
				else if(Math.abs(array01[0][key]) == Math.abs(array02[0][key]))
				{
					if(array01[0][0] > array02[0][0])
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
						
						array03.push(array01[0]);
						array01.shift();
					}
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
module.exports.mergeArray = mergeArray;
