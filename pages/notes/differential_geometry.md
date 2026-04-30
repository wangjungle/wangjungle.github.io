# 微分几何
> [!INFO]
> 本文档基于《微分几何入门》马跃，张正策，西安交通大学出版社
> 由于微分几何的数学对象很多，所以在保留原书的前提下，本文档也按照书中提到的数学对象罗列展开
## CH2: 三维欧式空间中的向量代数和曲线论

**定义 (Definition)**:
设 $a<b \in \mathbb{R}$, 并且 $\mathbf{r} 为 (a,b)$ 到 $\mathbb{R}^3$ 的 $C^k$ 映射。
 $$\mathbf{r}: (a,b) \to \mathbb{R}^3$$

满足 $\forall t \in (a,b) \mathbf{r}'(t) \neq \mathbf{0}$,令 $C = \{\mathbf{r}(t) \in \mathbb{R}^3 | t \in (a,b)\}$.称 $C$ 为**一段 $C^k$ 正则曲线**，称 $\mathbf{r}$ 为$C$ 的一个正则参数化

**关键性质**:
同一曲线的参数化不唯一
> 可以写出单位圆的多个正则参数化

**定义 (Definition)**:
设 $\mathbf{u}: [t_a, t_b] \to \mathbb{R}^3$ 为一个 $C^1$ 的曲线的正参数化。
若该曲线的起点和终点分别为 $\mathbf{u}(t_a)$ 和 $\mathbf{u}(t_b)$，则定义在 $\mathbf{u}(t_a)$ 和 $\mathbf{u}(t_b)$ 上的弧长 $S$ 为：
$$S = \int_{t_a}^{t_b} ||\mathbf{u}'(t)||_2 dt$$

**定理 (Theorem)**:
设 $C \subset \mathbb{R}^3$ 为 $C^2$ 空间曲线，$\mathbf{r}: (a,b) \to \mathbb{R}^3$ 为其一个 $C^2$ 参数化。
设 $\mathbf{y}: (c,d) \to (a,b)$ 为 $C^1$ 的正参数变换。
则 $\mathbf{r} \circ \mathbf{y}$ 为 $C$ 的一个 $C^2$ 参数化。

**关键性质**:
$$\int_{C} ||\mathbf{r}'(s)|| ds = \int_{a}^{b} ||\mathbf{r}'(t)|| dt$$
同一曲线的弧长与参数化无关。

**定义 (Definition)**:
设 $\mathbf{r}: (a,b) \to \mathbb{R}^3$ 为 $C^2$ 曲线，$\mathbf{y}: (c,d) \to (a,b)$ 为 $C^1$ 的正参数变换。
则 $\mathbf{r} \circ \mathbf{y}$ 为 $C$ 的一个 $C^2$ 参数化。
使用 $\int_{a}^{b} ||\mathbf{r}'(t)|| dt = s - c$.

**定理 (Theorem)**:
设 $C \subset \mathbb{R}^3$ 为曲线，$\mathbf{r}: (a,b) \to \mathbb{R}^3$ 为其 $C^2$ 参数化。
设 $(A, \xi)$ 为 $\mathbb{R}^2$ 到自身的变换。
则曲线 $C' = (A, \xi) C$ 有参数化：
$$\mathbf{r}(t) = A\mathbf{r}(t)$$
并且与 $C$ 的弧长相等。

**定义 (Definition)**:
设曲线 $\mathbf{r}: (a,b) \to \mathbb{R}^3$ 为一条 $C^2$ 曲线。
定义 $\alpha(s) := \mathbf{r}(s)$，$\beta(s) = ||\mathbf{r}(s)||$。
定义 $X(s) := ||\mathbf{r}'(s)||$，称为曲线在 $\mathbf{r}(s)$ 处的曲率。

**描述 (Description)**:
上述的 $\alpha(s)$ 是曲线的切线方向，$\beta(s)$ 称为曲线的主法向。若 $\mathbf{r}(s) \neq 0$，则主法向无定义。进一步，定义 $\mathbf{r}(s) := \alpha(s) \times \beta(s)$，称为曲线在点处的法向量。

**定理 (Theorem)**:
**曲率的几何意义**:
设 $\mathbf{r}: (a,b) \to \mathbb{R}^3$ 为 $C^3$ 曲线。
*   **法向平面 (Normal Plane)**: $\mathbf{r}(s)$ 和 $\alpha(s)$ 共同定义了曲线在点处的法向平面。
*   **法截面 (Normal Section)**: $\mathbf{r}(s)$ 所在的平面称为曲线在点处的法截面。

**定义 (Definition)**:
**曲率 ($\kappa$)**:
曲率 $\kappa$ 定义为曲线 $\mathbf{r}(s)$ 在点 $s_0$ 处的法向平面上的曲率。
$$\kappa(s_0) = \lim_{\Delta s \to 0} \frac{(\mathbf{r}(s_0) - \mathbf{r}(s_0 - \Delta s)) \times (\mathbf{r}(s_0 + \Delta s) - \mathbf{r}(s_0))}{(\Delta s)^3}$$

**定义 (Definition)**:
设 $\mathbf{r}: (a,b) \to \mathbb{R}^3$ 为一条 $C^2$ 曲线 $C$。
曲线 $C$ 的 Frenet 坐标系由以下三个单位向量构成：

1.  **切向量 (Tangent Vector)**:
    $$\mathbf{T}(s) = \frac{\mathbf{r}'(s)}{||\mathbf{r}'(s)||}$$
2.  **法向量 (Normal Vector)**:
    $$\mathbf{N}(s) = \frac{\mathbf{T}'(s)}{||\mathbf{T}'(s)||}$$
3.  **副法向量 (Binormal Vector)**:
    $$\mathbf{B}(s) = \mathbf{T}(s) \times \mathbf{N}(s)$$

**定理 (Theorem)**:
**Frenet-Serret 公式**:
对于曲线 $\mathbf{r}(s)$，其单位向量 $\mathbf{T}(s), \mathbf{N}(s), \mathbf{B}(s)$ 满足以下微分关系：

$$\begin{cases} \mathbf{T}'(s) = \kappa(s) \mathbf{N}(s) \\ \mathbf{N}'(s) = -\kappa(s) \mathbf{T}(s) + \tau(s) \mathbf{B}(s) \\ \mathbf{B}'(s) = -\tau(s) \mathbf{N}(s) \end{cases}$$

其中：
*   $\kappa(s)$ 是曲线在点 $s$ 的**曲率 (Curvature)**。
*   $\tau(s)$ 是曲线在点 $s$ 的**挠率 (Torsion)**。

**总结 (Summary)**:
Frenet 坐标系 $\{\mathbf{T}(s), \mathbf{N}(s), \mathbf{B}(s)\}$ 构成了曲线 $\mathbf{r}(s)$ 在点 $s$ 的一个正交基。

**Frenet 运动公式 (Frenet Formulas)**:

$$\begin{pmatrix} \mathbf{T}(s) \\ \mathbf{N}(s) \\ \mathbf{B}(s) \end{pmatrix}' = \begin{pmatrix} 0 & \kappa(s) & 0 \\ -\kappa(s) & 0 & \tau(s) \\ 0 & -\tau(s) & 0 \end{pmatrix} \begin{pmatrix} \mathbf{T}(s) \\ \mathbf{N}(s) \\ \mathbf{B}(s) \end{pmatrix}$$

**定理 (Theorem)**:
**Frenet 定理 (Frenet's Theorem)**:
设曲线 $\mathbf{r}: (a,b) \to \mathbb{R}^3$ 是 $C^2$ 可参数化。
若 $\mathbf{r}'(s) \neq 0$，则存在一个正交基 $\{\mathbf{T}(s), \mathbf{N}(s), \mathbf{B}(s)\}$，构成曲线 $\mathbf{r}(s)$ 在点 $s$ 的 Frenet 坐标系。

**定理 (Theorem)**:
**曲率和挠率的存在性**:
设曲线 $\mathbf{r}: (a,b) \to \mathbb{R}^3$ 是 $C^2$ 可参数化。
若 $k(s) \neq 0$，则存在曲率 $\kappa(s)$ 和挠率 $\tau(s)$。

**总结 (Summary)**:
Frenet 运动公式描述了曲线的单位向量 $\{\mathbf{T}, \mathbf{N}, \mathbf{B}\}$ 如何随弧长 $s$ 变化，其变化率由曲率 $\kappa(s)$ 和挠率 $\tau(s)$ 决定。

# 第 3 章 仿射空间几何学

**定义 (Definition)**:
设 $A$ 是一个非空集。考虑映射：$A \times A \to \mathbb{R}^n$，记 $(A, B) \to AB$。

**定义 (Definition)**:
**直线 (Line)**:
三维仿射空间 $\mathbb{A}^3$ 的子集 $L$，若有点 $A \in L$，且存在向量 $\mathbf{v} \in \mathbb{R}^3$，使得 $L = \{B \in A^3 | \vec{AB} = k\mathbf{v}, k \in \mathbb{R}\}$。
则称 $L$ 为过 $A$ 以 $\mathbf{v}$ 方向的直线，$\mathbf{v}$ 为 $L$ 的方向向量。

**定义 (Definition)**:
**子空间 (Subspace)**:
仿射空间 $\mathbb{A}^n$ 的子空间。

**定义 (Definition)**:
**仿射坐标系 (Affine Coordinates)**:
仿射空间 $\mathbb{A}^n$ 上选择一个点 $O$。若 $\mathbb{A}^n$ 的仿射坐标系为 $\{e_1, e_2, \dots, e_n\}$，则定义了仿射坐标系。

**仿射坐标系（更详细的描述）**:
在仿射空间 $\mathbb{A}^n$ 上，选择一个点 $O$。若 $\mathbb{A}^n$ 的仿射坐标系为 $\{e_1, e_2, \dots, e_n\}$，则定义了仿射坐标系。

**定理 (Theorem)**:
**仿射坐标变换公式**:
设 $\mathbf{A}$ 在第一个坐标系 $\{e_1, e_2, \dots, e_n\}$ 上的坐标，则在第二个坐标系 $\{f_1, f_2, \dots, f_n\}$ 中，其坐标 $y_i$ 可以通过以下关系式计算：

$$y_i = \sum_{j=1}^n T_j (x_j - a_j)$$

其中，$\mathbf{T}$ 是相关的变换矩阵。

**定理 (Theorem)**:
**坐标系变换的条件**:
如果 $\mathbf{A}$ 在第一个坐标系 $(x_1, \dots, x_n)$ 上的坐标，则在第二个坐标系中，其坐标 $y_i$ 满足上述关系。

**定理 (Theorem)**:
**角度和定向的保持性**:
1.  如果变换矩阵 $\mathbf{T}$ 可逆，则两个仿射坐标系具有相同的角度（定向）。
2.  如果 $\det(\mathbf{T}) < 0$，则两个仿射坐标系具有相反的角度（定向）。

**定义 (Definition)**:
**角度保持性**:
在仿射变换下，保持角度不变的性质。

**定义 (Definition)**:
设 $A = \{e_1, e_2, \dots, e_n\}$ 是 $\mathbb{R}^n$ 的一个仿射坐标系。一个集合 $U \subset A^n$ 称为 $\mathbb{A}^n$ 的一个仿射子空间。

**定理 (Theorem)**:
设 $U$ 是 $\mathbb{A}^n$ 的一个开区域，考虑函数 $f: U \to \mathbb{R}^m$。

**定理 (Theorem)**:
设 $U$ 是 $\mathbb{A}^n$ 的一个开区域，考虑函数 $f: U \to \mathbb{R}^m$。如果 $f$ 满足以下条件：

1.  **共线性 (Collinearity)**: $f$ 将三点 $A, B, C$ 映射到共线的点。
2.  **仿射坐标系保持性**: $f$ 在仿射坐标系 $\{e_1, \dots, e_n\}$ 上的坐标，映射到 $\mathbb{R}^m$ 的坐标 $(f_1, \dots, f_m)$。
3.  **仿射变换保持性**: $f$ 在仿射坐标系 $\{e_1, \dots, e_n\}$ 上的坐标，映射到 $\mathbb{R}^m$ 的坐标 $(f_1, \dots, f_m)$。

**定义 (Definition)**:
设 $U$ 是 $\mathbb{A}^n$ 的一个开区域，考虑函数 $f: U \to \mathbb{R}^m$。如果 $f$ 满足上述条件，则 $f$ 是一个仿射变换。

**定义 (Definition)**:
设 $U$ 是 $\mathbb{R}^n$ 上的开区域。若 $f: U \to \mathbb{R}^m$ 是可微的，考虑 $f$ 从仿射坐标系 $\{e_1, \dots, e_n\}$ 得到的 $n$ 元函数。

**定理 (Theorem)**:
若 $f$ 在 $\mathbb{R}^n$ 上是 $C^k$ 函数，则 $f$ 从仿射坐标系 $\{e_1, \dots, e_n\}$ 得到的 $n$ 元函数也是 $C^k$ 的。

**定义 (Definition)**:
设 $U$ 是 $\mathbb{R}^n$ 上开区域，考虑函数 $f: U \to \mathbb{R}^m$。

**定义 (Definition)**:
设 $\mathbb{A}^n$ 上有仿射坐标系 $\{e_1, \dots, e_n\}$。仿射映射 $f: \mathbb{A}^n \to \mathbb{R}^m$。

**定理 (Theorem)**:
若 $f$ 在 $\mathbb{R}^n$ 上是 $C^k$ 函数，则 $f$ 从仿射坐标系 $\{e_1, \dots, e_n\}$ 得到的函数也是 $C^k$ 的。

**定理 (Theorem)**:
**仿射空间上的函数像**:
设 $U$ 是 $\mathbb{A}^n$ 的一个开区域，考虑函数 $f: U \to \mathbb{R}^m$。则 $f$ 从仿射坐标系 $\{e_1, \dots, e_n\}$ 上的像，存在于 $\mathbb{R}^m$ 中。

**定义 (Definition)**:
**仿射空间结构**:
设 $\mathbb{A}^n$ 是一个仿射空间。对于 $\mathbb{A}^n$ 上的点 $A$，定义集合 $\mathbb{T}_A = \{ (A, B) / B \in \mathbb{A}^n \}$。在 $\mathbb{T}_A$ 上定义群运算 $(A, B) + (A, C) = (A, D)$，使得 $\mathbb{T}_A$ 是一个群。

**定义 (Definition)**:
**同理空间**:
仿射坐标系 $\lambda: (A, B) = (A, C)$，使得 $\mathbb{A}^n$ 是仿射空间 $(\mathbb{T}_A, +, \cdot)$ 的同理空间。

**定义 (Definition)**:
设 $U$ 是 $\mathbb{A}^n$ 的开空间上的区域，考虑映射 $X: U \to \mathbb{A}^n$。

**定义 (Definition)**:
设 $X: U \to \mathbb{R}^n$ 是一个向量场。

**定义 (Definition)**:
设 $U \subset \mathbb{A}^n$ 是有仿射坐标系 $\{e_1, \dots, e_n\}$ 的开区域。考虑曲线 $\gamma(t)$。

**计算 (Calculation)**:
若 $\gamma(t)$ 在 $U$ 上运动，其速度 $\frac{d\gamma}{dt}$ 可以通过坐标计算：
$$\frac{d\gamma}{dt}(t) = \frac{dx^i}{dt} e_i = \frac{\partial x^i}{\partial y^j} \frac{dy^j}{dt} e_i$$
$$= y^j \frac{\partial x^i}{\partial y^j} e_i$$

**定义 (Definition)**:
对于 $P$ 的随机上的点 $A$，定义映射 $\phi(A)$：
$$\phi(A) = \frac{\partial x^i}{\partial y^j} e_j$$
该映射 $\phi(A)$ 是 $\mathbb{R}^m$ 的自然坐标系。将 $\phi$ 的映射为自然坐标系。