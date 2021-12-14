import { FiShoppingCart } from 'react-icons/fi';
import { Icon } from '@chakra-ui/react';

import './Card.css'

function truncate(str: string, len: number) {
    if (str.length > len) {
        if (len <= 3) return str.slice(0, len - 3) + "..."
        else return str.slice(0, len) + "..."
    }
    else { return str }
}

function ProductCard({ title, price, image }: any) {
    return (
        <div className='card'>
            <div className='card_img'> <img src={image}/> </div>
            <div className='card_info'>
                <p className='title'>{truncate(title, 50)}</p>
                <div className='spacer'/>
                <div className='add_to_cart'> <button>{price}$ <Icon as={FiShoppingCart}/></button> </div>
            </div>
        </div>
    )

{/*         <Flex> */}
{/*             <Box */}
{/*                 width="20rem" */}
{/*                 borderWidth="1px" */}
{/*                 rounded="lg" */}
{/*                 shadow="lg" */}
{/*                 p='2vw' */}
{/*             > */}
{/*                 <Box bg='white'> */}
{/*                     <Image */}
{/*                         backgroundSize="contain" */}
{/*                         m='auto' */}
{/*                         height="30vh" */}
{/*                         src={image} */}
{/*                         alt={`Picture of ${name}`} */}
{/*                         /> */}
{/*                 </Box> */}
{/*  */}
{/*                 <Box p="6" height="4rem"> */}
{/*                     <Flex mt="1" justifyContent="space-between" alignContent="center"> */}
{/*                         <Box */}
{/*                             fontSize="l" */}
{/*                             fontWeight="semibold" */}
{/*                             as="h4" */}
{/*                             lineHeight="tight" */}
{/*                             isTruncated> */}
{/*                             {title} */}
{/*                         </Box> */}
{/*                     </Flex> */}
{/*  */}
{/*                     <Flex justifyContent="space-between" alignContent="center"> */}
{/*                         <Box fontSize="xl" color={useColorModeValue('gray.800', 'white')}> */}
{/*                             <Box as="span" color={'gray.600'} fontSize="lg"> $ </Box> */}
{/*                             {price.toFixed(2)} */}
{/*                         </Box> */}
{/*                         <Tooltip */}
{/*                             label="Add to cart" */}
{/*                             bg="white" */}
{/*                             placement={'top'} */}
{/*                             color={'gray.800'} */}
{/*                             fontSize={'1em'}> */}
{/*                             <chakra.a href={'#'} display={'flex'}> <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} /> </chakra.a> */}
{/*                         </Tooltip> */}
{/*                     </Flex> */}
{/*                 </Box> */}
{/*             </Box> */}
{/*         </Flex> */}
    {/* ); */}
}

export default ProductCard;
