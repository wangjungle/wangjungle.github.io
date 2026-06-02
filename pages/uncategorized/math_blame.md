# 一些数学吐槽
## 微分几何的记号滥用
来来来我们看一下微分几何的教材
$\partial_{\theta}$ 他是偏导数算子，他也是自然标架的一个分量，他也是一个切向量，他还是一个导算子，他在向量运算的时候不需要遵守`Lebniz` 法则，但是在偏导数运算的时候又需要遵守，所以为什么教材一定要把他们写在一起
$$
\begin{aligned}
\partial_Y \boldsymbol{X} &= (Y^a \partial_{y^a} x^j) \partial_j (X^b \partial_{y^b} x^l) \boldsymbol{e}_l \\
&= Y^a \partial_{y^a} (X^b \partial_{y^b} x^l) \boldsymbol{e}_l \\
&= Y^a \partial_{y^a} X^b \partial_{y^b} x^l \cdot \boldsymbol{e}_l + Y^a X^b \partial_{y^a} \partial_{y^b} x^l \cdot \boldsymbol{e}_l \\
&= (Y^a \partial_{y^a} X^b) \partial_{y^b} + (Y^a X^b \partial_{y^a} \partial_{y^b} x^l) \boldsymbol{e}_l .
\end{aligned}
$$
第一遍看这个联络导数能看懂的也是神人了
再来看这个
$\varepsilon,E,\mathcal{E}$  就这几个符号反复用，就不能用别的？

