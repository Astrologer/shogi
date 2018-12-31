# Shogi Board
Simple and minimalistic shogi board. Main purpose is to share tsume and assist a bit during solving.

![Screenshot](images/screenshot.png)
## Usage
Example: https://astrologer.github.io/shogi?sfen=9.9.9.1S1+R5.1P+r6.p1k6.1L1n5.3Gs4.+p2s5&title=ts5

Two parameters are supported currently:
 - sfen - sfen string that represents pieces on the board. Additional mappings are supported to avoid url encoding.
    - "/" <=> "." row delimiter
    - " " <=> "_" section delimiter
    - "+" <=> "x" promotion flag
 - title - url encoded title of the window or
    - ts1 - "1 move tsume"
    - ts3 - "3 moves tsume"
    - ts5 - "5 moves tsume"
    - ts7 - "7 moves tsume"
    - ts9 - "9 moves tsume"
## 1 move
- [7+p1/6PLk/7R1/7G1/9/9/9/9/9](https://astrologer.github.io/shogi/?sfen=7+p1.6PLk.7R1.7G1.9.9.9.9.9&title=ts1)
## 5 moves
- [9/9/2R1g4/S5P2/4k1+l2/9/3+P2+P2/9/9](https://astrologer.github.io/shogi/?sfen=9.9.2R1g4.S5P2.4k1+l2.9.3+P2+P2.9.9&title=ts5)
- [4b3g/6P1R/6BkS/7g1/9/9/9/9/9 b P](https://astrologer.github.io/shogi/?sfen=4b3g.6P1R.6BkS.7g1.9.9.9.9.9_b_P&title=ts5)
- [3Ggk1n+P/4spPn+P/5G3/9/9/9/9/9/9](https://astrologer.github.io/shogi/?sfen=3Ggk1n+P.4spPn+P.5G3.9.9.9.9.9.9&title=ts5)
- [2b1g4/3+B1k1+P1/6N2/6P2/9/9/9/9/9 b S](https://astrologer.github.io/shogi/?sfen=2b1g4.3+B1k1+P1.6N2.6P2.9.9.9.9.9_b_S&title=ts5)
- [3lkg3/2+Bnnp3/3+L5/9/9/9/9/9/9 b S](https://astrologer.github.io/shogi/?sfen=3lkg3.2+Bnnp3.3+L5.9.9.9.9.9.9_b_S&title=ts5)
- [9/6B2/2+P2S3/3p1p3/2gk2n1+B/9/3S+p1G2/9/7N1](https://astrologer.github.io/shogi/?sfen=9.6B2.2+P2S3.3p1p3.2gk2n1+B.9.3S+p1G2.9.7N1&title=ts5)
- [3+P5/2G6/+P2g5/1k7/3P5/1S7/9/9/9 b GL](https://astrologer.github.io/shogi/?sfen=3+P5.2G6.+P2g5.1k7.3P5.1S7.9.9.9_b_GL&title=ts5)
- [2pk5/4gp3/2+P+B5/9/9/9/9/9/9 b N](https://astrologer.github.io/shogi/?sfen=2pk5.4gp3.2+P+B5.9.9.9.9.9.9_b_N&title=ts5)
- [5R1s1/5+L+rkB/8p/7N1/9/9/9/9/9](https://astrologer.github.io/shogi/?sfen=5R1s1.5+L+rkB.8p.7N1.9.9.9.9.9&title=ts5)
- [9/7s1/6+Bg1/7P1/7+lk/9/5+B1G1/6N2/9](https://astrologer.github.io/shogi/?sfen=9.7s1.6+Bg1.7P1.7+lk.9.5+B1G1.6N2.9&title=ts5)
