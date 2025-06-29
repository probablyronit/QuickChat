# 🚀 Deployment Checklist for Streamify

## Environment Variables Setup

### Backend Environment Variables (Render)
Make sure these are set in your Render backend service:

```
STREAM_API_KEY=your_actual_stream_api_key
STREAM_API_SECRET=your_actual_stream_api_secret
JWT_SECRET_KEY=your_jwt_secret_key
MONGODB_URI=your_mongodb_connection_string
NODE_ENV=production
```

### Frontend Environment Variables (Render)
Make sure these are set in your Render frontend service:

```
VITE_STREAM_API_KEY=your_actual_stream_api_key
```

## Common Issues & Solutions

### 1. Chat Connection Fails
**Symptoms**: "Could not connect to chat" error
**Causes**:
- Missing or incorrect `STREAM_API_KEY` in backend
- Missing or incorrect `VITE_STREAM_API_KEY` in frontend
- CORS issues

**Solutions**:
- ✅ Verify both backend and frontend have the same Stream API key
- ✅ Check that the API key is valid in your Stream dashboard
- ✅ Ensure CORS is properly configured for your domain

### 2. CORS Errors
**Symptoms**: Network errors in browser console
**Solutions**:
- ✅ Update the `allowedOrigins` array in `backend/src/server.js` with your actual frontend URL
- ✅ Make sure your frontend URL is included in the CORS configuration

### 3. Token Generation Fails
**Symptoms**: "Failed to generate chat token" error
**Causes**:
- Missing Stream API credentials
- Invalid API key/secret

**Solutions**:
- ✅ Verify `STREAM_API_KEY` and `STREAM_API_SECRET` are set correctly
- ✅ Check that the credentials are valid in your Stream dashboard

## Testing Steps

1. **Test Environment Variables**:
   ```bash
   cd backend
   node test-env.js
   ```

2. **Check Browser Console**:
   - Open browser developer tools
   - Look for any error messages related to Stream or chat
   - Check network tab for failed requests

3. **Test Chat Flow**:
   - Login to the application
   - Try to start a chat with another user
   - Check if the chat loads properly

## Debug Information

The updated code now includes detailed logging. Check your Render logs for:
- "Generating Stream token for user: [user_id]"
- "Stream token generated successfully"
- "Initializing stream chat client..."
- "User connected successfully"

If you see any errors, they will be logged with detailed information to help identify the issue.

## Stream Dashboard Setup

1. Go to your Stream dashboard
2. Verify your API key and secret are correct
3. Check that your app is properly configured
4. Ensure you have the correct permissions for chat functionality

## Support

If you're still having issues:
1. Check the Render logs for detailed error messages
2. Verify all environment variables are set correctly
3. Test the environment variables using the test script
4. Check the browser console for any client-side errors 