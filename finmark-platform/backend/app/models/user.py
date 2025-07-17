from datetime import datetime
from typing import Optional
from pydantic import BaseModel, EmailStr, validator

class UserRegister(BaseModel):
    name: str
    surname: str
    email: EmailStr
    role: str
    password: str
    approval: str = "Pending"

    @validator("role")
    def validate_role(cls, v):
        valid_roles = ["Administrator", "Manager", "Data Analyst", "Developer", "End User"]
        if v not in valid_roles:
            raise ValueError(f"Role must be one of: {', '.join(valid_roles)}")
        return v
class UserLogin(BaseModel):
    email: EmailStr
    password: str

class DailyTimeRecord(BaseModel):
    intern_id: str
    date: str
    clock_in: Optional[datetime] = None
    clock_out: Optional[datetime] = None
    break_start: Optional[datetime] = None
    break_end: Optional[datetime] = None
    total_work_hours: Optional[float] = 0.0
    status: str = "Active"