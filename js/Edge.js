// import Point.js

class Edge {
    constructor(p1 = new Point(0, 0), p2 = new Point(0, 0)){
        this.p1 = p1;
        this.p2 = p2;
        this.length = p1.dist(p2);
        if (p1.x == p2.x){
            this.grad = Infinity;
            this.intercept = 0;
        } else {
            this.grad = (p2.y - p1.y) / (p2.x - p1.x);
            this.intercept = p1.y - this.grad * p1.x;
        }
    }

    setPoints(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
        this.length = p1.dist(p2);
        if (p1.x == p2.x){
            this.grad = Infinity;
            this.intercept = 0;
        } else {
            this.grad = (p2.y - p1.y) / (p2.x - p1.x);
            this.intercept = p1.y - this.grad * p1.x;
        }
    }

    cross(e) {// 2直線の交点を計算
        if (this.grad == e.grad) return null
        
        let a = this.grad;
        let b = this.intercept;
        let c = e.grad;
        let d = e.intercept;

        return new Point((d-b)/(a-c), (a*d-b*c)/(a-c));
    }

    // perp cross productを計算
    // この線分が引数の線分よりも反時計回りの位置にあるなら正の数、同一角度にあるなら負の数、時計回りの位置にあるなら負の数を返す
    isCounterclockwiseTo(e){
        return (this.p2.x - this.p1.x) * (e.p2.y - e.p1.y) - (this.p2.y - this.p1.y) * (e.p2.x - e.p1.x);
    }
}
