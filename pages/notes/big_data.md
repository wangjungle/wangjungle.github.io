> 本文档默认都是行向量
# SVD 
SVD的步骤，对于任意形状矩阵 $A^{m\times n}$, 计算 $A = U \Sigma V^T$，则 $U \in \mathbb{R}^{m\times m},V \in \mathbb{R}^{n\times n},\Sigma \in \mathbb{R}^{m\times n}$
+ 计算 $A^TA$ 的特征值 $\lambda _i$和特征向量 $v_i,1 \le i \le k$
+ 计算非零奇异值  $\sigma _i = \sqrt{\lambda_i}$，假设有 $k$ 个，并且降序排列
于是
$$
\Sigma = 
\begin{bmatrix}
\sigma_1 & & \cdots \\
 & \sigma_2 & \\
 \vdots & & \ddots
\end{bmatrix}
$$
$$
V = [v_1,v_2,\cdots]
$$
对于剩下的 $n-k$ 个列向量，是$N(A)$ 的一组标准正交基
$$
U = [u_1,u_2,\cdots]，其中 u_i = \frac{1}{\sigma_i} Av_i,1 \le i \le k
$$
对于 $U$ 剩下的$m-k$个列向量，是 $N(A^T)$ 的一组标准正交基
$U$ 的列向量也是 $AA^T$ 的特征向量
**截断奇异值分解**，就是在$k$ 个奇异值中，选择 前 $r$ 个，这样会压缩矩阵

# PCA
有$m$个样本，每个样本有$d$ 个特征，构成了矩阵
$$
X = 
\begin{bmatrix}
x_{11} & x_{21} & \cdots & x_{m1} \\
x_{12} & x_{22} & \cdots & x_{m2} \\
\vdots & \vdots & \ddots & \vdots \\
x_{1d} & x_{2d} & \cdots & x_{md}
\end{bmatrix},X \in \mathbb{R}^{d\times m}
$$

希望将他投射到 $d'$  维上，并且要足够区分，这就意味着要使方差最大，考虑下列优化模型
$$
\begin{matrix}
\max \text{tr}(W^TXX^TW) \\
s.t. W^TW = I,I \in \mathbb{R}^{d'\times d'},W \in \mathbb{R}^{d\times d'}
\end{matrix}
$$
使用拉格朗日乘子法
$$
\begin{aligned}
L(W,\Theta) & = -\text{tr} (W^TXX^TW) + <\Theta,W^TW-I>_F \\
& = -\text{tr} (W^TXX^TW) + \text{tr} (\Theta^T(W^TW-I))
\end{aligned}
$$
其中 $\Theta \in \mathbb{R}^{d'\times d'}$ 是拉格朗日乘子矩阵，$F$ 范数的定义如下
$$
<A,B>_F = \text{tr}(A^TB)
$$

推导直接看pdf,这里上结果
<img src="/images/pcares.png">
这就是说你只要计算一下 $XX^T$ 的前 $d'$ 个最大的特征值及其对应的特征向量即可 ，**当然别忘了先对数据进行中心化和规范化**
这里是关于方差的分析
<img src="/images/pcavar.png">
# 贝叶斯机器学习
## 第三个pdf主要是数理统计和概率论基础
但是里面有关于Beta分布的内容
<img src="/images/beta.png">
一些性质，来自AI
### 1. Beta 分布 ($\text{Beta}(\alpha, \beta)$)

Beta 分布是定义在区间 **$[0, 1]$** 上的连续概率分布，常用于建模概率或比例。

- **定义域与参数**：其变量 $x \in [0, 1]$，参数 $\alpha, \beta > 0$ 是形状参数。
  
- **概率密度函数 (PDF)**：
  
    $$f(x; \alpha, \beta) = \frac{x^{\alpha-1}(1-x)^{\beta-1}}{B(\alpha, \beta)}$$
    
    其中 $B(\alpha, \beta)$ 是 Beta 函数，作为归一化常数。
    
- **主要性质**：
  
    - **均值与方差**：$E[X] = \frac{\alpha}{\alpha+\beta}$，$\text{Var}(X) = \frac{\alpha\beta}{(\alpha+\beta)^2(\alpha+\beta+1)}$。
      
    - **共轭性**：它是**二项分布**和**伯努利分布**的共轭先验。这意味着在更新观测数据后，后验分布仍然是 Beta 分布，只需简单地累加观测到的成功和失败次数。
      
    - **灵活性**：通过调整 $\alpha$ 和 $\beta$，它可以呈现对称、左偏、右偏、单峰（U型）甚至均匀分布（当 $\alpha=\beta=1$ 时）。
      

---

### 2. Gamma 分布 ($\text{Gamma}(\alpha, \beta)$)

Gamma 分布是定义在 **$(0, +\infty)$** 上的连续概率分布，常用于建模等待时间或随机变量的尺度。

- **定义域与参数**：变量 $x > 0$，参数 $\alpha$（形状参数 $shape$）和 $\beta$（尺度参数 $scale$ 或速率参数 $rate$，取决于定义方式）。
  
- **概率密度函数 (PDF)**：
  
    $$f(x; \alpha, \beta) = \frac{\beta^\alpha}{\Gamma(\alpha)} x^{\alpha-1} e^{-\beta x}$$
    
- **主要性质**：
  
    - **均值与方差**：在速率参数定义下，$E[X] = \frac{\alpha}{\beta}$，$\text{Var}(X) = \frac{\alpha}{\beta^2}$。
      
    - **共轭性**：它是**泊松分布**和**指数分布**的共轭先验。在贝叶斯估计中，这使得计算变得非常简洁。
      
    - **可加性**：如果 $X_i \sim \text{Gamma}(\alpha_i, \beta)$ 且相互独立，则它们的和 $\sum X_i \sim \text{Gamma}(\sum \alpha_i, \beta)$。
      
    - **与其他分布的关系**：
      
        - 当 $\alpha=1$ 时，它退化为**指数分布**。
          
        - 当 $\alpha=n/2, \beta=1/2$ 时，它就是自由度为 $n$ 的**卡方分布 ($\chi^2$)**。
    还有共轭先验表
    <img src="/images/gonge.png">

补充一下共轭先验分布的定义
<img src="/images/defgonge.png">

## pdf4有一些概念，自己看
监督学习 无监督学习
强化学习
贝叶斯分类
判别模型，生成模型
<img src="/images/logstic.png">
<img src="/images/navie_bayes.png">
后面有一个具体的例子来看如何分类，还有多项分布和狄利克雷分布
zz<img src="/images/gongee.png">
# EM算法

前面是三硬币模型的推导
## 三硬币模型
假设有硬币$A,B,C$,正面朝上的概率是 $\boldsymbol{\theta} = (\pi,p,q)$ ，如果硬币 $A$ 正面朝上，那么投掷$B$ ，否则投掷 $C$ ，把$A$ 的结果记为$z_i$  ，最终的观测结果极为 $x_i$ ，那么首先有  
$$
\begin{aligned}
p(x|\boldsymbol{\theta}) & = \sum_{z} p(x,z|\boldsymbol{\theta}) \\
& = \sum_zp(z|\boldsymbol{\theta})p(x|z,\boldsymbol{\theta}) \\
& = \pi p^x(1-p)^{1-x} + (1-\pi)q^x(1-q)^{1-x}
\end{aligned}
$$

那么似然函数
$$
P(\boldsymbol{x}|\boldsymbol{\theta}) = \prod_{j=1}^n[\pi p^{x_j}(1-p)^{1-x_j}+(1-\pi)q^{x_j}(1-q)^{1-x_j}]
$$
参数的极大似然估计
$$
\hat{\boldsymbol{\theta}} = \text{arg} \max_{\boldsymbol{\theta}} \log(P(\boldsymbol{x}|\boldsymbol{\theta}))
$$
此问题没有解析解，从而引出了EM算法
对数似然函数
$$
LL(\boldsymbol{\theta}) = \sum_{i=1}^n \log(\sum_{z_i}P(x_i,z_i|\boldsymbol{\theta}))
$$
引入隐变量$z$的分布 $Q(z)>0,\sum _z Q(z)=1$ ，那么
$$
 \begin{aligned}
 LL(\boldsymbol{\theta})  & = \sum_{i=1}^n \log (\sum_{z_i}p(x_i,z_i|\boldsymbol{\theta}) \\
 & = \sum_{i=1}^n \log(\sum_{z_i}Q(z_i)\frac{P(x_i,z_i|\boldsymbol{\theta})}{Q(z_i)}) \\
 & = \sum_{i=1}^n \log(E(\frac{P(x_i,z_i|\boldsymbol{\theta})}{Q(z_i)}))
\end{aligned}
$$
 由$Jensen$ 不等式
$$
\begin{aligned}
LL(\boldsymbol{\theta})  & \ge \sum_{i=1}^n \sum_{z_i} Q(z_i) \log(\frac{P(x_i,z_i|\boldsymbol{\theta})}{Q(z_i)}) \\
& = J(\boldsymbol{\theta},Q(z))
\end{aligned}
$$
于是通过优化下界 $J(\boldsymbol{\theta},z)$ 的方式来极大化 $LL(\boldsymbol{\theta})$ 
于是来到了EM算法部分
<img src="/images/e1.png">

 <img src="/images/e2.png">
 <img src="/images/e3.png">
 <img src="/images/m1.png">
 <img src="/images/m2.png">
后面是高斯混合模型，以及使用EM算法学习高斯混合模型
