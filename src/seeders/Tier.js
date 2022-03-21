import { TierModel } from '../models';

const createTiers = async () => {
    const result = await TierModel.find({});
    if (result.length == 0) {
        TierModel.create([
            {
                tierName: 'Basic',
                price: 15,
                description: '<p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>'
            },
            {
                tierName: 'Professional',
                price: 30,
                description: '<p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>'
            },
            {
                tierName: 'Executive',
                price: 50,
                description: '<p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>'
            }
        ]);
    }
};
createTiers();
