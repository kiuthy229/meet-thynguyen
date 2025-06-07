const upload_preset = import.meta.env.VITE_UPLOAD_PRESET;
const cloud_name = import.meta.env.VITE_CLOUD_NAME;

const uploadImageToCloudinary = async (
  file: File
): Promise<{ url: string }> => {
  const uploadData = new FormData();
  uploadData.append('file', file);
  uploadData.append('upload_preset', upload_preset); // Replace with your Cloudinary upload preset
  uploadData.append('cloud_name', cloud_name); // Replace with your Cloudinary cloud name

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
    {
      method: 'POST',
      body: uploadData,
    }
  );
  if (!res.ok) {
    throw new Error('Failed to upload image to Cloudinary');
  }
  const data = await res.json();
  if (!data) {
    throw new Error('Image upload failed, secure URL not found');
  }
  return data; // Return the secure URL of the uploaded image
};

export default uploadImageToCloudinary;
