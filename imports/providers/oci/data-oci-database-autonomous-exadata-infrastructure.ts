// https://www.terraform.io/docs/providers/oci/r/data_oci_database_autonomous_exadata_infrastructure.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "autonomous_exadata_infrastructure_id": {
        "type": "string",
        "required": true
      },
      "availability_domain": {
        "type": "string",
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "display_name": {
        "type": "string",
        "computed": true
      },
      "domain": {
        "type": "string",
        "computed": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "hostname": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "computed": true
      },
      "last_maintenance_run_id": {
        "type": "string",
        "computed": true
      },
      "license_model": {
        "type": "string",
        "computed": true
      },
      "lifecycle_details": {
        "type": "string",
        "computed": true
      },
      "maintenance_window": {
        "type": [
          "list",
          [
            "object",
            {
              "days_of_week": [
                "list",
                [
                  "object",
                  {
                    "name": "string"
                  }
                ]
              ],
              "hours_of_day": [
                "list",
                "number"
              ],
              "lead_time_in_weeks": "number",
              "months": [
                "list",
                [
                  "object",
                  {
                    "name": "string"
                  }
                ]
              ],
              "preference": "string",
              "weeks_of_month": [
                "list",
                "number"
              ]
            }
          ]
        ],
        "computed": true
      },
      "maintenance_window_details": {
        "type": [
          "list",
          [
            "object",
            {
              "days_of_week": [
                "list",
                [
                  "object",
                  {
                    "name": "string"
                  }
                ]
              ],
              "hours_of_day": [
                "list",
                "number"
              ],
              "lead_time_in_weeks": "number",
              "months": [
                "list",
                [
                  "object",
                  {
                    "name": "string"
                  }
                ]
              ],
              "preference": "string",
              "weeks_of_month": [
                "list",
                "number"
              ]
            }
          ]
        ],
        "computed": true
      },
      "next_maintenance_run_id": {
        "type": "string",
        "computed": true
      },
      "nsg_ids": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "shape": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "subnet_id": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciDatabaseAutonomousExadataInfrastructureConfig extends TerraformMetaArguments {
  readonly autonomousExadataInfrastructureId: string;
}
export class DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeek extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowMonths extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindow extends ComplexComputedList {

  // days_of_week - computed: true, optional: false, required: true
  public get daysOfWeek() {
    return 'not implemented' as any;
  }

  // hours_of_day - computed: true, optional: false, required: true
  public get hoursOfDay() {
    return 'not implemented' as any;
  }

  // lead_time_in_weeks - computed: true, optional: false, required: true
  public get leadTimeInWeeks() {
    return this.getNumberAttribute('lead_time_in_weeks');
  }

  // months - computed: true, optional: false, required: true
  public get months() {
    return 'not implemented' as any;
  }

  // preference - computed: true, optional: false, required: true
  public get preference() {
    return this.getStringAttribute('preference');
  }

  // weeks_of_month - computed: true, optional: false, required: true
  public get weeksOfMonth() {
    return 'not implemented' as any;
  }
}
export class DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails extends ComplexComputedList {

  // days_of_week - computed: true, optional: false, required: true
  public get daysOfWeek() {
    return 'not implemented' as any;
  }

  // hours_of_day - computed: true, optional: false, required: true
  public get hoursOfDay() {
    return 'not implemented' as any;
  }

  // lead_time_in_weeks - computed: true, optional: false, required: true
  public get leadTimeInWeeks() {
    return this.getNumberAttribute('lead_time_in_weeks');
  }

  // months - computed: true, optional: false, required: true
  public get months() {
    return 'not implemented' as any;
  }

  // preference - computed: true, optional: false, required: true
  public get preference() {
    return this.getStringAttribute('preference');
  }

  // weeks_of_month - computed: true, optional: false, required: true
  public get weeksOfMonth() {
    return 'not implemented' as any;
  }
}

// Resource

export class DataOciDatabaseAutonomousExadataInfrastructure extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseAutonomousExadataInfrastructureConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_autonomous_exadata_infrastructure',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autonomousExadataInfrastructureId = config.autonomousExadataInfrastructureId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autonomous_exadata_infrastructure_id - computed: false, optional: false, required: true
  private _autonomousExadataInfrastructureId: string;
  public get autonomousExadataInfrastructureId() {
    return this._autonomousExadataInfrastructureId;
  }
  public set autonomousExadataInfrastructureId(value: string) {
    this._autonomousExadataInfrastructureId = value;
  }

  // availability_domain - computed: true, optional: false, required: true
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // domain - computed: true, optional: false, required: true
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
  }

  // hostname - computed: true, optional: false, required: true
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_maintenance_run_id - computed: true, optional: false, required: true
  public get lastMaintenanceRunId() {
    return this.getStringAttribute('last_maintenance_run_id');
  }

  // license_model - computed: true, optional: false, required: true
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // maintenance_window - computed: true, optional: false, required: true
  public maintenanceWindow(index: string) {
    return new DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindow(this, 'maintenance_window', index);
  }

  // maintenance_window_details - computed: true, optional: false, required: true
  public maintenanceWindowDetails(index: string) {
    return new DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails(this, 'maintenance_window_details', index);
  }

  // next_maintenance_run_id - computed: true, optional: false, required: true
  public get nextMaintenanceRunId() {
    return this.getStringAttribute('next_maintenance_run_id');
  }

  // nsg_ids - computed: true, optional: false, required: true
  public get nsgIds() {
    return this.getListAttribute('nsg_ids');
  }

  // shape - computed: true, optional: false, required: true
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      autonomous_exadata_infrastructure_id: this._autonomousExadataInfrastructureId,
    };
  }
}
