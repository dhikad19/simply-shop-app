import React, { useState } from 'react'
import { Container, Wrapper, Title, 
         Top, Bottom, TopButton, TopTexts, TopText, Info, Summary,
         Product, ProductDetails, Image, Details, ProductName, ProductId, ProductColor, ProductSize, PriceDetail,
         ProductAmountContainer, ProductAmount, ProductPrice, SummaryTitle, SummaryItem, SummaryItemPrice, SummaryItemText, Button  } from './CartElements'
import { IoIosAdd, IoIosRemove } from 'react-icons/io'

const Cart = () => {
    const [quantity, setQuantity] = useState(1);
    
    const handleQuantity = (type) => {
        if (type === "dec") {
        quantity > 1 && setQuantity(quantity - 1);
        } else {
        setQuantity(quantity + 1);
        }
    };

    const [quantitysec, setQuantitysec] = useState(1);
    
    const handleQuantitysec = (type) => {
        if (type === "dec") {
        quantitysec > 1 && setQuantitysec(quantitysec - 1);
        } else {
        setQuantitysec(quantitysec + 1);
        }
    };
    return (
        <Container>
            <Wrapper>
                <Title>Your Cart</Title>
                <Top>
                    <TopButton to="catalogue">Shopping</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag (2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton>Checkout</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetails>
                                <Image src="https://m.media-amazon.com/images/I/A1ntnF3PJOL._CLa%7C2140%2C2000%7C71fqNJuQHSL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UL1500_.png" />
                                <Details>
                                    <ProductName><b>Product: </b>Love T-Shirt</ProductName>
                                    <ProductId><b>ID: </b>98901956821</ProductId>
                                    <ProductColor color="red"/>
                                    <ProductSize><b>Size: </b>L</ProductSize>
                                </Details>
                            </ProductDetails>
                            <ProductDetails>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <IoIosAdd cursor="pointer" onClick={() => handleQuantity("inc")} />
                                            <ProductAmount>{quantity}</ProductAmount>
                                        <IoIosRemove cursor="pointer" onClick={() => handleQuantity("dec")} />
                                    </ProductAmountContainer>
                                    <ProductPrice>Rp 150.000</ProductPrice>
                                </PriceDetail>
                            </ProductDetails>
                        </Product>
                        <Product>
                            <ProductDetails>
                                <Image src="https://m.media-amazon.com/images/I/71AfDIOx2+L._AC_UX342_.jpg" />
                                <Details>
                                    <ProductName><b>Product: </b>Simon T-Shirt</ProductName>
                                    <ProductId><b>ID: </b>98901956822</ProductId>
                                    <ProductColor color="grey"/>
                                    <ProductSize><b>Size: </b>L</ProductSize>
                                </Details>
                            </ProductDetails>
                            <ProductDetails>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <IoIosAdd cursor="pointer" onClick={() => handleQuantitysec("inc")} />
                                            <ProductAmount>{quantitysec}</ProductAmount>
                                        <IoIosRemove cursor="pointer" onClick={() => handleQuantitysec("dec")} />
                                    </ProductAmountContainer>
                                    <ProductPrice>Rp 120.000</ProductPrice>
                                </PriceDetail>
                            </ProductDetails>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>Rp 450.000</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>Rp 50.000</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shopping Discount</SummaryItemText>
                            <SummaryItemPrice>- Rp 25.000</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText type="total">Total Payment</SummaryItemText>
                            <SummaryItemPrice>Rp 445.000</SummaryItemPrice>
                        </SummaryItem>
                        <Button>Order</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
        </Container>
    )
}

export default Cart
