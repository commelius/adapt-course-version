# Course Version

An extension to output into console the version data stored in `course.json`.

The `course.json` file should contain the `version` entry with the `x.y.z.build.timestamp` data, this extension pulls this details and output into console converting timestamp (if exists) into meaningful date string.

## Installation

Download the ZIP and extract into the src > extensions directory and run an appropriate Grunt task.

## Usage

The `course.json` file should contain the `version` entry with the `x.y.z.build.timestamp` data. Install this extension and after course data is loaded the version is output into console.

```
{
    "version": "0.0.5.205.1460357487487",
    "_id": "course",
    "_type": "course",
	
}
```