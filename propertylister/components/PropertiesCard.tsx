import { Property } from "@prisma/client";
import { Card, Carousel, Col, Row, Tag } from "antd";
import Image from "next/image"; 
import React from "react";
import defaultImage from "@/public/images/default-img.png";
import {EnvironmentOutlined, ExpandAltOutlined, HomeOutlined, UserOutlined} from "@ant-design/icons"
import Link from "next/link";
import { PropertyWithImages } from "@/db";
const PropertiesCard = ({ properties }: { properties: Property[] }) => {
  return (
    <>
      {properties.map((property) => (
        <Card hoverable className="p-0 mb-1 pointer" key={property.id}>
          <Row gutter={[16, 16]} wrap>
            <Col xs={24} md={8}>

              <Carousel
                arrows
                style={{
                  height: "200px",
                }}
              >
                {property.images.length > 0 ? (
                  property.images.map((image, i) => (
                    <Image
                      key={image.id}
                      src={image.url}
                      alt="property image"
                      width={0}
                      height={200}
                      objectFit="cover"
                      sizes="100vw"
                      className="image-br"
                      priority
                    />
                  ))
                ) : (
                  <Image
                    src={defaultImage.src}
                    alt="Default image"
                    width={0}
                    height={200}
                    objectFit="cover"
                    sizes="100vw"
                    className="image-br"
                  />
                )}
              </Carousel>
            </Col>
            <Col xs={24} md={16} className="p-1">
              <Link
                href={`/properties/${property.id}`}
                style={{ color: "black" }}
              >
                <PropertyContent property={property} />
              </Link>
            </Col>
          </Row>
        </Card>
      ))}
    </>
  );
};

export default PropertiesCard;

function PropertyContent({ property }: { property: PropertyWithImages }) {
  return (
    <>
      <div className="card-header">
        <p className="card-header-title">For {property.type.toUpperCase()}</p>
        <p className="card-header-price">
          ₹{property.price.toLocaleString()}
          {property.type === "RENT" && "/month"}
        </p>
      </div>
      <Tag icon={<HomeOutlined />} color="blue">
        {property.bhk.split("_").join(" ")}
      </Tag>
      <Tag icon={<HomeOutlined />} color="blue">
        {property.propertyType}
      </Tag>
      <Tag icon={<ExpandAltOutlined />} color="blue">
        {property.area} sqft
      </Tag>
      <Tag icon={<UserOutlined />} color="blue">
        {property.preferredTenants}
      </Tag>
      <h4 className="mt-1">{property.name}</h4>
      <p className="card-desc">
        {property.description?.slice(0, 180)}{" "}
        {property.description!?.length > 180 && "..."}
      </p>
      <EnvironmentOutlined />
      {property.street}, {property.city}, {property.state}, {property.zipcode}
    </>
  );
}