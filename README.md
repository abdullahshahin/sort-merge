# sort-merge
A javascript lib for sorting arrays and objects in sync and async based on merge algorthim, fits for big data sorting.

<pre><code> npm install sort-merge </code></pre>

<b> Synchronous and Asyncronous functions </b>

<pre><code> 
var sort = require('sort-merge');

console.log(sort.merge1dSync.ascending([2,4,73,1,3,8,0,3,12,34,11,24,774,21,25]));

console.log(sort.merge1dSync.descending([2,4,73,1,3,8,0,3,12,34,11,24,774,21,25]));

sort.merge1dAsync.ascending([2,4,73,1,3,8,0,3,12,34,11,24,774,21,25],function(data)
{
	console.log("merge1dAsync.ascending >>>",data)
});

sort.merge1dAsync.descending([2,4,73,1,3,8,0,3,12,34,11,24,774,21,25],function(data)
{
	console.log("merge1dAsync.descending >>>",data)
});

</code></pre>

<p>
1 dimentional array sorting ascending and descending as sort.merge1dSync.ascending(array)
</p>

<pre><code>
console.log(sort.merge2dSync.mergeArray.ascending([[6,12],[8,123],[65,87],[43,19],[1,22],[6,12],[64,112],[123,12]],1));

console.log(sort.merge2dSync.mergeArray.descending([[6,12],[8,123],[65,87],[43,19],[1,22],[6,12],[64,112],[123,12]]));

sort.merge2dAsync.mergeArray.ascending([[6,12],[8,123],[65,87],[43,19],[1,22],[6,12],[64,112],[123,12]],1,function(data)
{
	console.log("mergeArray.ascending >>>",data)
});

sort.merge2dAsync.mergeArray.descending([[6,12],[8,123],[65,87],[43,19],[1,22],[6,12],[64,112],[123,12]],1,function(data)
{
	console.log("mergeArray.descending >>>",data)
});
</code></pre>

<p>
2 dimentional array representing as coordinates with axis sorting ascending and descending as sort.merge2dSync.mergeArray.ascending(array,axis), where axis is 0 for x or 1 for y, default is 0;
</p>

<pre><code>
console.log(sort.merge2dSync.mergeObject.ascending([{x:6,y:12,data:{location:"test"}},{x:8,y:123,data:{location:"test"}},{x:65,y:87,data:{location:"test"}},{x:43,y:19,data:{location:"test"}},{x:1,y:22,data:{location:"test"}},{x:6,y:12,data:{location:"test"}},{x:64,y:112,data:{location:"test"}},{x:123,y:12,data:{location:"test"}}],'y'));

console.log(sort.merge2dSync.mergeObject.descending([{x:6,y:12},{x:8,y:123},{x:65,y:87},{x:43,y:19},{x:1,y:22},{x:6,y:12},{x:64,y:112},{x:123,y:12}],'x'));

sort.merge2dAsync.mergeObject.ascending([{x:6,y:12},{x:8,y:123},{x:65,y:87},{x:43,y:19},{x:1,y:22},{x:6,y:12},{x:64,y:112},{x:123,y:12}],'x',function(data)
{
	console.log("mergeObject.ascending >>>",data)
});

sort.merge2dAsync.mergeObject.descending([{x:6,y:12},{x:8,y:123},{x:65,y:87},{x:43,y:19},{x:1,y:22},{x:6,y:12},{x:64,y:112},{x:123,y:12}],'x',function(data)
{
	console.log("mergeObject.descending >>>",data)
});
</code></pre>

<p>
object with x,y coordinates, can take data key for each object with axis sorting ascending and descending as sort.merge2dSync.mergeObject.ascending(array,axis), where axis is x or y, default is x;
</p>

<pre><code>
console.log(sort.MergeMultiSync.ascending([[2,4,73,1],[3,8,0,3],[12,34,11,24],[774,21]]))

console.log(sort.MergeMultiSync.descending([[2,4,73,1],[3,8,0,3],[12,34,11,24],[774,21]]))

sort.MergeMultiAsync.ascending([[2,4,73,1],[3,8,0,3],[12,34,11,24],[774,21]],function(data)
{
	console.log("MergeMultiAsync.ascending >>>",data)
});
sort.MergeMultiAsync.descending([[2,4,73,1],[3,8,0,3],[12,34,11,24],[774,21]],function(data)
{
	console.log("MergeMultiAsync.decending >>>",data)
});

</code></pre>

<p>
2 dimentioanl array with varying lengths as sort.MergeMultiSync.ascending(array2d);
</p>


<b>LICENSE</b>
<p>
sort-merge: Copyright (c) 2015 Abdullah Shahin
</p>
<p>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
</p>
<p>
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
</p>
<p>
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
</p>
