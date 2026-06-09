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

## 克氏记号就非得高的很复杂是么

来来来我们看计算克氏符号最简单的方法
$$
\begin{aligned}
\mathbf{r}_{uu} &= \Gamma_{11}^1 \mathbf{r}_u + \Gamma_{11}^2 \mathbf{r}_v + L \mathbf{n} \\
\mathbf{r}_{uv} &= \Gamma_{12}^1 \mathbf{r}_u + \Gamma_{12}^2 \mathbf{r}_v + M \mathbf{n} \\
\mathbf{r}_{vv} &= \Gamma_{22}^1 \mathbf{r}_u + \Gamma_{22}^2 \mathbf{r}_v + N \mathbf{n}
\end{aligned}
$$
很简洁对不对，不管是克氏记号，还是第二基本形式，都直接出来了

那么教材给的记号是什么呢
$$
\Gamma_{ij}^k = \frac{1}{2} g^{kl} \left( \frac{\partial g_{jl}}{\partial u^i} + \frac{\partial g_{il}}{\partial u^j} - \frac{\partial g_{ij}}{\partial u^l} \right)
$$
诗人握持，光一个下标轮转就能把人看晕，真的离谱好吧，算完了$G$还要算$G^{-1}$，然后偏导数轮转着加减还没法儿复用，真的恶心

> 虽然要学了第二基本形式才好讲上面的形式，但是我觉得一开始直接给出来也没啥，至少比下面这一坨要好



