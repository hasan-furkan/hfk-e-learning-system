import {Button, Card, Carousel, Flex, Rate, Typography} from "antd";
import {HeartFilled} from "@ant-design/icons";
const { Title, Paragraph } = Typography;

const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const LessonsList = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Card
      style={{
        width: 400,
      }}
    >
      <Carousel afterChange={onChange} dotPosition="right">
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
        <Flex gap={10} style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            justifyItems: 'center',
        }}>
            <Title level={3}>Title</Title>
            <Button shape='circle' style={{
                border: 'none',
                backgroundColor: '#fafafa',
                outline: 'none',
            }}>
                <HeartFilled style={{
                    color: 'red',
                }} />
            </Button>
        </Flex>
        <Flex gap="middle" vertical>
            <Flex gap="middle">
                <Rate defaultValue={3} />
                <Paragraph style={{
                    color: '#ccc',
                }}>778 reviews</Paragraph>
            </Flex>
            <Title level={5} style={{
                marginTop: '-20px',
                color: '#2a2a2a',
            }}>$ 200</Title>
            <Flex gap="middle">
                <Button type="primary">Add to Cart</Button>
                <Button type="primary">Buy Now</Button>
            </Flex>
        </Flex>
    </Card>
  );
};
export default LessonsList;
