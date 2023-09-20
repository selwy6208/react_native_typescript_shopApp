import React, { FC }  from 'react';
import { CardField, useStripe } from '@stripe/stripe-react-native';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const PaymentScreen: FC = () => {
	const { confirmPayment } = useStripe();

	return (
		<><CardField
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
			} }
			onFocus={(focusedField) => {
				console.log('focusField', focusedField);
			} } />
			<TouchableOpacity
				onPress={() => confirmPayment}
				style={styles.buttonStyle}>
				<Text style={styles.buttonText}>
					Pay
				</Text>
			</TouchableOpacity></>
	);
};

const styles = StyleSheet.create({
	buttonStyle: {
		alignItems: 'center',
		backgroundColor: '#b44666',
		padding: 14,
		marginLeft: 6,
		marginRight: 6,
		marginBottom: 20,
		borderRadius: 3,
	},
	buttonText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#fff',
	},
});

export default PaymentScreen;
