# 线性代数与数据学习
## Chapter 1: 线性表征

A是A的子空间特征组。

---

**定义 (Definition)**: 列空间的线性组合构成A的子空间。

**定理 (Theorem)**: $\vec{b}=(b_1, b_2, b_3)^T$属于A的列空间，当且仅当 $Ax=b$ 有解。

---

**定义 (Definition)**: 线性矩阵是其列空间的维数。

---

**示例/推导过程**
给定矩阵 $A$ 和向量 $x$:
$$A=\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}, \quad x=\begin{pmatrix} x_1 \\ x_2 \end{pmatrix}$$

计算 $Ax$:
$$Ax=\begin{pmatrix} x_1+2x_2 \\ 3x_1+4x_2 \end{pmatrix} = x_1\begin{pmatrix} 1 \\ 3 \end{pmatrix} + x_2\begin{pmatrix} 2 \\ 4 \end{pmatrix}$$

**定理 (Theorem)**: 线性无关列数 = 线性无关行数。

---

**矩阵乘法与元素定义**

*   **矩阵积**: $A$ 矩阵与 $B$ 矩阵的乘积 $C = AB$。
*   **元素定义**: 结果矩阵 $C$ 的元素 $c_{ij}$ 定义为：
    $$c_{ij} = \sum_{k=0}^{b} a_{ik}b_{kj}$$

---

**线性变换与矩阵构建**

*   **矩阵构建**: 如果给定向量 $u$ 和 $v$，可以构造一个矩阵 $M$。
    *   设 $u$ 是 $m \times 1$ 向量， $v$ 是 $1 \times p$ 向量。
    *   则 $uv^T$ 得到一个 $m \times p$ 矩阵。
*   **信息解读**:
    *   得到的矩阵的每一行，分别是 $v$ 的信息。
    *   得到的矩阵的每一列，分别是 $u$ 的信息。

**定义 (Definition)**:
*   **对称矩阵**: 矩阵 $A$ 满足 $A = A^T$。
*   **正交矩阵**: 矩阵 $A$ 满足 $A^T A = I$。

**定理 (Theorem)**:
*   线性无关列数 = 线性无关行数。
*   每个对称矩阵有 $n$ 个特征值和 $n$ 个单位正交的特征向量。

---

**矩阵分解形式 (Decomposition Forms)**

*   $A = LU$
*   $A = QR$
*   $S = Q \Lambda Q^T$
*   $A = X \Lambda X^{-1}$
*   $A = U \Sigma V^T$

---

**子空间定义 (Subspace Definitions)**

*   **列空间 $C(A)$**: $A$ 的所有列的线性组合构成的子空间。
*   **行空间 $C(A^T)$**: $A$ 的所有行（或 $A^T$ 的列）的线性组合构成的子空间。

**定义 (Definition)**:
*   **零空间 $N(A)$**: $Ax=0$ 的解集，即所有满足 $Ax=0$ 的向量 $x$ 构成的子空间。
*   **零空间 $N(A^T)$**: $A^T y=0$ 的解集，即所有满足 $A^T y=0$ 的向量 $y$ 构成的子空间。

---

**定理 (Theorem)**:
*   **秩的性质**: $\text{rank}(C(A)) = \text{rank}(A)$ 且 $\text{rank}(C(A^T)) = \text{rank}(A^T)$。
*   **秩-零度定理 (Rank-Nullity Theorem)**:
    *   $\text{rank}(A) = \text{rank}(C(A)) = \text{rank}(C(A^T)) = r$。
    *   $\text{dim}(N(A)) = n-r$。
    *   $\text{dim}(N(A^T)) = m-r$。

---

**关键关系与性质**

*   **正交性**:
    > *注释：对于任意向量 $a \in C(A)$ 和 $b \in N(A^T)$，有 $a \cdot b = 0$。*
    （即列空间 $C(A)$ 与 $N(A^T)$ 正交。）

*   **解集描述**:
    *   $Ax=0$ 的解集 $N(A)$。
    *   $A^T y=0$ 的解集 $N(A^T)$。

*   **维度推论**:
    *   如果 $A$ 是 $m \times n$ 矩阵，且 $\text{rank}(A) = r$，则 $N(A)$ 的维数是 $n-r$。

**矩阵秩的性质 (Properties of Matrix Rank)**

**定理 (Theorem)**:

1.  **乘积秩不等式**:
    $$\text{rank}(AB) \le \min\{\text{rank}(A), \text{rank}(B)\}$$
2.  **和的秩不等式**:
    $$\text{rank}(A+B) \le \text{rank}(A) + \text{rank}(B)$$
3.  **转置与秩**:
    $$\text{rank}(A^T A) = \text{rank}(A^T) = \text{rank}(A)$$
4.  **特定条件下的秩**:
    > *注：如果满足特定条件，则 $\text{rank}(AB) = \text{rank}(A) = \text{rank}(B)$。*

---

**Hadamard 矩阵 (Hadamard Matrix)**

*   **定义**: Hadamard 矩阵 $H_2$ 的形式为 $[1, 1]$。
*   **递归构造**: $H_{2n}$ 可以通过 $H_n$ 构造，其形式为：
    $$H_{2n} = \begin{bmatrix} H_n & H_n \\ H_n & -H_n \end{bmatrix}$$
*   **性质**: 这种构造的矩阵具有特定的秩和性质。

