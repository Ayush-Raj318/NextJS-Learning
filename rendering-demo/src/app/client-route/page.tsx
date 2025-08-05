"use client"

import React from 'react';
import { useTheme } from '../components/theme-provider';

export default function ClientRoutePage(){
  const theme = useTheme();
  return <h1 style={{ color: theme.colors.secondary}}>Client router</h1>
}