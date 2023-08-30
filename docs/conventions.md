# Android Version Management Guide

## Overview
This guide outlines the strategy for managing Android versionCode and versionName in your Android projects. The versionCode is an integer that represents the version of the application code, while the versionName is a string that represents the version shown to the user.

### Versioning Strategy
We use a unique approach to generate the versionCode from the versionName. The versionName follows the semantic versioning format MAJOR.MINOR.PATCH, and the versionCode is a concatenation of these numbers, padded as needed.


| Version Element | Value   | Padded Value | Description                          |
|-----------------|---------|--------------|--------------------------------------|
| Major Version   | 1       | 100000       | Major version, padded to six digits  |
| Minor Version   | 5       | 5000         | Minor version, padded to four digits |
| Patch Version   | 61      | 61           | Patch version, no padding needed     |
| **versionName** | 1.5.61  |              | Concatenated version name            |
| **versionCode** | 105061  |              | Concatenated padded values           |
