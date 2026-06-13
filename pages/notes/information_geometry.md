# 信息几何及其应用

> 本文中的凸函数指的是下凸函数

## 第一章 流形，散度，对偶平坦结构

#### 指数分布族上的布雷格曼散度

首先指数分布族是这样一个流形
$$
\{p(x;\theta)| \exp \{\Sigma\theta_i x_i + k(x) - \psi(\theta)\}\}
$$
考虑他的最简单的情形 $p(x;\lambda) = \lambda e^{-\lambda x}$，这是常见的单变量指数分布，这其中 $k(x)=x,\psi(\lambda)=-\ln (-\lambda)$

那么根据势函数 $\psi(\lambda) = -\ln(-\lambda)$，可以得到 **布雷格曼散度**
$$
D_{\psi}[\xi:\xi_0] = \psi(\xi) - \psi(\xi_0) - \nabla \psi(\xi_0)(\xi-\xi_0)
$$
这其实就是 $\xi$ 到 $\xi_0$ 所在点的 $\psi$ 的切平面的距离，如下图所示

<img src="/images/sandu.png">

带入得到具体的表达式
$$
D_{\psi}(\lambda : \lambda_0) = \ln\left( \frac{\lambda_0}{\lambda} \right) - \frac{\lambda}{\lambda_0} + 1
$$
这其实刻画了参数为$\lambda$ 的指数分布和参数为$\lambda_0$的指数分布的分离程度 

然后，布雷格曼散度$D_{\psi}(\lambda_0:\lambda_0+ d\lambda)$ 泰勒展开可以得到 **Hessian矩阵是一个对称正定矩阵，可以诱导一个内积**，所以后面在定义度规的时候，会发现$g_{ij}$和 $\psi$ 是有关系的 

#### 势函数的勒让德变换

仍然沿用上面的势函数$\psi$ ，勒让德变换$$\psi^*(\eta) = 1 + \ln\left( -\frac{1}{\eta} \right)$$ ，计算公式可以看书上。那么勒让德变换事实上会得到一个对偶的坐标，这里得到对偶坐标的意思就是说在所有的指数分布里面，我们通过 $\{\lambda\}$ 可以去刻画某个特定的指数分布的邻域，通过 $\{\eta\}$ 也可以，并且角度不同，比如指数分布族有 $\nabla \psi = E(X)$，所以在对偶坐标上相近的指数分布也意味着期望相近，一般把 $\{\lambda \}$ 叫做自然参数，很自然嘛，看形式就看出来了

有了对偶坐标，自然可以看到测地线和对偶测地线

比如我们有流形上面的两个点$\{\lambda = 1,\eta = 1\},\{\lambda=2,\eta=0.5\}$ ，我们考虑取测地线的中点

+ 在自然坐标系里面，坐标是 $\lambda$ 那么取中点之后 $\lambda_{mid} = \frac{1+2}{2}=1.5$ 得到的指数分布就是 $p(x)=1.5e^{-1.5x}$ 
+ 在对偶坐标系里面，自然是 $\eta_{mid} = \frac{1+0.5}{2} = 0.75$ 在根据自然坐标系和对偶坐标系的坐标变换 $\lambda_{mid}=\frac{1}{\eta_{mid}} = \frac{4}{3}$ 得到的指数分布是$p(x)=\frac{4}{3}e^{-\frac{4}{3}x}$ 

自然坐标系和对偶坐标系的变换一般是非线性的 $\eta = \nabla\psi(\lambda)$

同样的，在流形上某点的切空间上，可以得到基底和对偶基底

#### 广义勾股定理的例子

为了直观验证对偶平坦流形上的广义勾股定理（Generalized Pythagorean Theorem），我们选择均值 $\mu$ 与方差 $\sigma^2$ 皆未知的二维正态分布族 $N(\mu, \sigma^2)$ 作为统计流形。

1. 双平坦坐标系构建

高斯分布的概率密度函数可写为标准指数分布族形式：
$$p(x; \mu, \sigma^2) = \exp \left( \frac{\mu}{\sigma^2}x - \frac{1}{2\sigma^2}x^2 - \psi(\theta) \right)$$

由此可导出两套互为对偶的平坦坐标系：
* **自然坐标系（$\theta$ 坐标）**：$\theta^1 = \frac{\mu}{\sigma^2}, \quad \theta^2 = -\frac{1}{2\sigma^2}$
* **期望坐标系（$\eta$ 坐标）**：$\eta_1 = E[x] = \mu, \quad \eta_2 = E[x^2] = \mu^2 + \sigma^2$

2. 确定直角三角形的三个顶点

在 $Q$ 点处，利用“固定 $\theta^2$”与“固定 $\eta_1$”两条正交基底线的几何特性，精巧设计以下三个具体分布点：

* **直角顶点 $Q$（标准正态分布）**：
  
  $$\mu_Q = 0, \quad \sigma_Q^2 = 1 \implies \theta_Q = (0, -\frac{1}{2}), \quad \eta_Q = (0, 1)$$
* **源点 $P$（沿 $e$-测地线延伸，保持方差恒定）**：
  $$\mu_P = 2, \quad \sigma_P^2 = 1 \implies \theta_P = (2, -\frac{1}{2}), \quad \eta_P = (2, 5)$$
* **终点 $R$（沿 $m$-测地线延伸，保持均值恒定）**：
  $$\mu_R = 0, \quad \sigma_R^2 = 9 \implies \theta_R = (0, -\frac{1}{18}), \quad \eta_R = (0, 9)$$

> **几何特征验证：** > * 轨迹 $P \rightarrow Q$ 在 $\theta$ 空间中仅有第一分量变化，为一条严格的 **$e$-测地线（自然直线）**。
> * 轨迹 $Q \rightarrow R$ 在 $\eta$ 空间中仅有第二分量变化，为一条严格的 **$m$-测地线（混合直线）**。
> * 两条测地线在交点 $Q$ 处的切向量关于费希尔信息度量（Fisher Information Metric）严格正交：$\langle V_e, V_m \rangle = 0$。

3. KL 散度与勾股定理闭合验证

对于任意两个正态分布，其 KL 散度（即该流形上的 Bregman 散度）计算公式为：
$$D_{KL}(1 \parallel 2) = \ln\frac{\sigma_2}{\sigma_1} + \frac{\sigma_1^2 + (\mu_1 - \mu_2)^2}{2\sigma_2^2} - \frac{1}{2}$$

根据信息几何投影理论，当 $e$-测地线 $P \rightarrow Q$ 与 $m$-测地线 $Q \rightarrow R$ 正交时，非对称散度精确满足对偶形式的广义勾股定理：
$$D_{KL}(P \parallel Q) + D_{KL}(R \parallel Q) = D_{KL}(R \parallel P)$$

我们将上述三点参数分别代入公式进行具体数值计算：

1. **计算直角边 $D_{KL}(P \parallel Q)$**：
   $$D_{KL}(P \parallel Q) = \ln\frac{1}{1} + \frac{1 + (2 - 0)^2}{2 \times 1} - \frac{1}{2} = 0 + \frac{5}{2} - \frac{1}{2} = 2$$

2. **计算对偶直角边 $D_{KL}(R \parallel Q)$**：
   $$D_{KL}(R \parallel Q) = \ln\frac{1}{3} + \frac{9 + (0 - 0)^2}{2 \times 1} - \frac{1}{2} = -\ln 3 + \frac{9}{2} - \frac{1}{2} = 4 - \ln 3$$

3. **计算斜边 $D_{KL}(R \parallel P)$**：
   $$D_{KL}(R \parallel P) = \ln\frac{1}{3} + \frac{9 + (0 - 2)^2}{2 \times 1} - \frac{1}{2} = -\ln 3 + \frac{13}{2} - \frac{1}{2} = 6 - \ln 3$$

4. 结论

将两直角边相加：
$$D_{KL}(P \parallel Q) + D_{KL}(R \parallel Q) = 2 + (4 - \ln 3) = 6 - \ln 3$$

该结果与斜边计算值 $D_{KL}(R \parallel P) = 6 - \ln 3$ **完全相等**。散度恒等式的完美闭合，在微观层面确证了高斯流形具备对偶平坦的几何架构。

## 第二章 概率分布的指数族而混合族

