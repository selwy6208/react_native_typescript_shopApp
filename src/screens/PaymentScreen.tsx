import React, { FC }  from 'react';
import { CardField } from '@stripe/stripe-react-native';

const PaymentScreen: FC = () => {
	// const { confirmPayment } = useStripe();

	return (
		<CardField
			postalCodeEnabled={true}
			placeholders={{
				number: '6208 6208 6208 6208',
			}}
			// eslint-disable-next-line react-native/no-inline-styles
			cardStyle={{
				backgroundColor: '#F56FFF',
				textColor: '#000000',
			}}
			// eslint-disable-next-line react-native/no-inline-styles
			style={{
				width: '100%',
        height: 50,
        marginVertical: 30,
			}}
			onCardChange={(cardDetails) => {
				console.log('cardDetails', cardDetails);
			}}
			onFocus={(focusedField) => {
				console.log('focusField', focusedField);
			}}
		 />
	);
};

export default PaymentScreen;
