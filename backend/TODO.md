# TODO: Fix MongoDB Atlas Connection and JWT Validation Issues

## Steps to Complete

1. **Update requirements.txt**: Add `certifi` package for SSL/TLS CA file support.

2. **Fix database.py**:
   - Add `tlsCAFile=certifi.where()` to MongoClient configuration.
   - Remove fallback to mock DB; raise error on connection failure.
   - Ensure clear exports: client, db, users_collection, history_collection, contact_collection, USE_MOCK_DB = False.

3. **Fix contact.py**:
   - Add import for `users_collection` in the `validate_user` function.

4. **Update predict.py**:
   - Ensure `validate_user` logic is consistent; remove mock DB handling since fallback is removed.
   - Confirm JWT validation uses same SECRET_KEY and ALGORITHM as auth.py.

5. **Test the fixes**:
   - Run the backend and verify MongoDB Atlas connects without SSL errors.
   - Test signup/login still work.
   - Test contact form saves to MongoDB.
   - Test prediction endpoint works with JWT validation and saves history to MongoDB.
   - Ensure no 401 errors or invalid token issues.
