import React from 'react'

function HomeCard({children}) {
  return (
    {children?.map((item) => {
      return (
        <Card
          key={item.id}
          onClick={() => navigate(`/bbs/detail/${item.id}`)}
        >
          <CardImg src={item.image} art={"왜안되는거람"} />
          <CardInfo>
            <h1>{item.title}</h1>
            <h2>{item.location}</h2>
            <h2>
              {item.startDate}, {item.endDate}
            </h2>
          </CardInfo>
        </Card>
      );
    })}
  )
}

export default HomeCard