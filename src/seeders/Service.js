import { ServiceModel } from '../models';

const createServices = async () => {
    const result = await ServiceModel.find({});
    if (result.length == 0) {
        ServiceModel.create([
            {
                serviceName: 'Resume Writing',
                slug: 'resume-writing',
                description: '<p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>'
            },
            {
                serviceName: 'Career Coaching',
                slug: 'career-coaching',
                description: '<p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>'
            },
            {
                serviceName: 'Linkedin profile update',
                slug: 'linkedin-profile-update',
                description: '<p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>'
            }
        ]);
    }
};
createServices();
