import "./styles.scss";

const SalesPredictions = () => {
  return (
    <div className="sale-prediction-container">
      <h2>Sales Prodiction</h2>
      <div>
        <h3>Women's Fashion</h3>
        <div className="sp-items-wrapper">
            <Item image="https://i.pinimg.com/originals/44/b9/bd/44b9bdecb7c29d07515351d4565d5b19.jpg" name="name"/>
            <Item image="https://i.pinimg.com/236x/85/29/c9/8529c9f4398bb28196417346133d1faf.jpg" name="name"/>
            <Item image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_yL7CLOdTbAYl-pz5RVUkgCIFLjESGYvmj252j5JZZSCIOyzv-43mQwITkc7-1IAXR54&usqp=CAU" name="name"/>
            <Item image="https://i.pinimg.com/originals/8a/43/ca/8a43ca90018dfe1c527db63077ad42f2.jpg" name="name"/>
            <Item image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFvEPwM5yxXbUFPKAmuk6HB8AA5cT4jzMkV_cDwrby7Vqe3wFdjpabu9LjQdCkfQcEwgk&usqp=CAU" name="name"/>
            <Item image="https://5.imimg.com/data5/PB/QQ/SO/ANDROID-96509073/product-jpeg-500x500.jpg" name="name"/>
        </div>
      </div>
      <div>
        <h3>Men's Fashion</h3>
        <div className="sp-items-wrapper">
            <Item image="https://i.pinimg.com/736x/5f/e1/04/5fe104837d5dafbe5fbf9081851b290d.jpg" name="name"/>
            <Item image="https://i.pinimg.com/originals/43/10/83/431083227a1153d2afc589265219405b.jpg" name="name"/>
            <Item image="https://i.pinimg.com/originals/76/e4/11/76e4117eb294b68840ad7d551b2667f6.jpg" name="name"/>
            <Item image="https://i.pinimg.com/originals/bb/45/31/bb453129df1dc12fc17e835fb7774054.jpg" name="name"/>
            <Item image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs0-Nc-GurpOcNkiI42aqHS8MBARG6QHhSUA&usqp=CAU" name="name"/>
            <Item image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG_XHJsEk2GvQPtpExfBJgEvniQLOYPYfEkQ&usqp=CAU" name="name"/>
        </div>
      </div>
    </div>
  );
};

interface IItem {
  name: string;
  image: string;
}

const Item = (props: IItem) => {
  return (
    <div className="sp-item">
      <img src={props.image} alt={props.name} />
      <label>{props.name}</label>
    </div>
  );
};

export default SalesPredictions;
