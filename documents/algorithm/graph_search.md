# 그래프 탐색: BFS, DFS

<hr>

`그래프 탐색`은 연결된 edge(간선)을 통해 한 개의 node(정점)에서 시작해 `모든 Node를 한 번씩 거쳐가는 순회 알고리즘`을 말하며, 대표적인 탐색 기법으론 BFS와 DFS가 있다.

## BFS와 DFS의 차이

BFS와 DFS의 차이는 아래와 같다.

|   구분    |                                                                  BFS (Breadth First Search)                                                                   |                                                           DFS (Depth First Search)                                                            |
| :-------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: |
| 탐색 방식 |                                                                         너비 우선 ➡️                                                                          |                                                                 깊이 우선 ⬇️                                                                  |
|   구현    |                                                                       2개의 Queue 이용                                                                        |                                                           Stack 또는 재귀함수 이용                                                            |
| 적용 예시 | <p style="text-align: left; line-height: 1.3">1. 최단 경로를 구하는 경우<br>2. 검색 대상 규모가 크지 않은 경우<br>3. 시작점부터 도착점까지 멀지 않은 경우</p> | <p style="text-align: left; line-height: 1.3">1. 경로에 특징이 있는 경우<br>2. 검색 대상 규모가 큰 경우<br>3. 모든 경로를 거쳐야하는 경우</p> |

> Queue는 FIFO, Stack은 LIFO 구조이다.

## 너비 우선 탐색 - BFS

너비 우선 탐색(BFS, Breadth First Search)는 현재 node에 연결된 가까운 node부터 탐색을 시작한다. 즉, 깊게(deep) 전에 넓게(wide) 탐색하는 것. BFS는 탐색을 마친 큐와 탐색해야 할 큐. `2개의 Queue`를 활용한다.

### 구현

```javascript
const bfs = (graph, startNode) => {
  const visited = []; // 탐색을 마친 큐
  let needVisit = []; // 탐색해야 할 큐

  needVisit.push(startNode); // 노드 탐색 시작

  // 탐색해야 할 노드가 남아 있다면
  while (needVisit.length !== 0) {
    const node = needVisit.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      needVisit = [...needVisit, ...graph[node]]; // FIFO
    }
  }
  return visited;
};
```

## 깊이 우선 탐색 - DFS

깊이 우선 탐색(DFS, Deep First Search)는 현재 node의 분기를 모두 탐색한 후 다음 분기를 탐색한다. 즉, 넓게(wide) 전에 깊게(deep) 탐색하는 것. DFS는 탐색을 마친 큐와 탐색해야 할 스택. `1개의 Stack`을 활용하거나 `재귀 함수`를 활용한다.

### 구현 - Stack

```javascript
const dfs = (graph, startNode) => {
  const visited = []; // 탐색을 마친 큐
  let needVisit = []; // 탐색해야 할 스택

  needVisit.push(startNode);

  // 탐색해야 할 노드가 남아 있다면
  while (needVisit.length !== 0) {
    const node = needVisit.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      needVisit = [...graph[node], ...needVisit]; // LIFO
    }
  }

  return visited;
};
```

### 구현 - 재귀함수

```javascript
const solution = (graph, startNode) => {
  const visited = [startNode];
  const dfs = (node) => {
    // 모든 노드를 탐색했다면
    if (visited.length === Object.keys(graph).length) return;
    graph[node].forEach((needVisit) => {
      if (!visited.includes(needVisit)) dfs(needVisit, visited.push(needVisit));
    });
  };
  dfs(startNode);
  return visited;
};
```

> 생각해 보면 간단했는데 재귀 함수 구현에 왜 이렇게 오랜 시간을 썼는지 으휴~🤯!

### Reference

- [[알고리즘] 너비 우선 탐색(BFS)이란](https://gmlwjd9405.github.io/2018/08/15/algorithm-bfs.html)
- [[알고리즘] 깊이 우선 탐색(DFS)이란](https://gmlwjd9405.github.io/2018/08/14/algorithm-dfs.html)
