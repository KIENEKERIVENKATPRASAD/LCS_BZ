class ways_of_making_change_2 {
  static dp = [];

  static countss(a, n, t) {
    if (n === 0 && t === 0) return 1;
    if (n === 0) return 0;

    if (ways_of_making_change_2.dp[n][t] !== -1) {
      return ways_of_making_change_2.dp[n][t];
    }

    let la = 0, ra = 0;
    if (t >= a[n - 1]) {
      la = ways_of_making_change_2.countss(a, n - 1, t - a[n - 1]);
    }
    ra = ways_of_making_change_2.countss(a, n - 1, t);

    ways_of_making_change_2.dp[n][t] = la + ra;
    return la + ra;
  }

  solve(A, queries, n, q) {
    const ans = new Array(q).fill(0);

    let size = 0;
    for (const c of queries) {
      size = Math.max(c, size);
    }

    ways_of_making_change_2.dp = Array.from({ length: n + 1 }, () =>
      Array(size + 1).fill(-1)
    );

    for (let i = 0; i < queries.length; i++) {
      ans[i] = ways_of_making_change_2.countss(A, n, queries[i]);
    }

    return ans;
  }
}

export default ways_of_making_change_2;