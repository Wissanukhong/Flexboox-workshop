<div align="center" >
    <img src="img/Flexbox.jpg" alt="flexbox"> 
    <h1>CSS Flexbox</h1>
</div>

Dispaly Flex เราใช้คำสั่งนี้เพื่อเป็นบอกให้โปรแกรมทราบว่า ตอนนี้เรากำลังจะทำการจัดตำแหน่งเป็น Flexbox โดยมีคำสั่ง ดังนี้  
ใช้คำสั่ง `display: flex;` วัตถุก็จะทำการจัดตำแหน่งเป็นแบบ Flex

| Index | Syntax   | Description |
| ----- | -------- | ----------- |
| 01    | Property | Value       |
| 02    | Property | Value       |

```css
.container {
  display: flex;
}

.box-content {
  width: 700px;
  background: #a5a5a5;
  padding: 20px;
  box-shadow: 5px 5px 40px 10px rgba(214, 214, 214, 1);
  border-radius: 4px;
}
```

1. [อ่านเพิ่มเติม](https://blog.thinknet.co.th/tech/%E0%B8%A1%E0%B8%B2%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%88%E0%B8%B1%E0%B8%81%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%87%E0%B8%B2%E0%B8%99-css-flexbox-%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%94%E0%B8%B5%E0%B8%81%E0%B8%A7%E0%B9%88%E0%B8%B2)

2. [อ่านเพิ่มเติม](https://www.babelcoder.com/blog/articles/flexbox-and-auto-margins)

3. [อ่านเพิ่มเติม](https://medium.com/siamhtml/css-flexbox-%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3-%E0%B8%AA%E0%B8%AD%E0%B8%99%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B9%83%E0%B8%8A%E0%B9%89-a2100b93efff)

### justify-content

- flex-start: Items align to the left side of the container.
- flex-end: Items align to the right side of the container.
- center: Items align at the center of the container.
- space-between: Items display with equal spacing between them.
- space-around: Items display with equal spacing around them.

### align-items

- flex-start: Items align to the top of the container.
- flex-end: Items align to the bottom of the container.
- center: Items align at the vertical center of the container.
- baseline: Items display at the baseline of the container.
- stretch: Items are stretched to fit the container.

การจัดตำแหน่งให้วัตถุอยู่ตรงกลางหน้าจอ

```css
class {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

การจัดตำแหน่งให้วัตถุอยู่ตรง around 

```css
pond {
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
}
```
