class Point {
    constructor(x = 0, y = 0){
        this.x = x;
        this.y = y;
    }

    dist(p = new Point(0, 0)){// 点pとの距離を計算
        return Math.sqrt((p.x - this.x)**2 + (p.y - this.y)**2);
    }

    distSquared(p = new Point(0, 0)){// 点pとの距離の2乗を計算
        return (p.x - this.x)**2 + (p.y - this.y)**2;
    }

    static middle(p1, p2) {// 点p1と点p2の中点を計算
        return new Point( (p1.x + p2.x) / 2, (p1.y + p2.y) / 2);
    }

    static polarAngleSort(points, p0 = new Point(0, 0)) {
        function polarAngle(p) {
            // canvas上の点はy座標が下向き正なので、結果を上向き正の角度として得るように、-1をかける
            return -1 * Math.atan2(p.y - p0.y, p.x - p0.x);
        }

        points.sort((p1, p2) => {
            const diff = polarAngle(p1) - polarAngle(p2);

            if (diff !== 0) {
                return diff;
            }

            return p1.distSquared() - p2.distSquared();
        })
    }
}