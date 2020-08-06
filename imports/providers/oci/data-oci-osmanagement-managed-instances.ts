// https://www.terraform.io/docs/providers/oci/r/data_oci_osmanagement_managed_instances.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "display_name": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "managed_instances": {
        "type": [
          "list",
          [
            "object",
            {
              "child_software_sources": [
                "list",
                [
                  "object",
                  {
                    "id": "string",
                    "name": "string"
                  }
                ]
              ],
              "compartment_id": "string",
              "description": "string",
              "display_name": "string",
              "id": "string",
              "is_reboot_required": "bool",
              "last_boot": "string",
              "last_checkin": "string",
              "managed_instance_groups": [
                "list",
                [
                  "object",
                  {
                    "display_name": "string",
                    "id": "string"
                  }
                ]
              ],
              "os_family": "string",
              "os_kernel_version": "string",
              "os_name": "string",
              "os_version": "string",
              "parent_software_source": [
                "list",
                [
                  "object",
                  {
                    "id": "string",
                    "name": "string"
                  }
                ]
              ],
              "status": "string",
              "updates_available": "number"
            }
          ]
        ],
        "computed": true
      },
      "os_family": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "filter": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "required": true
            },
            "regex": {
              "type": "bool",
              "optional": true
            },
            "values": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciOsmanagementManagedInstancesConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly displayName?: string;
  readonly osFamily?: string;
  /** filter block */
  readonly filter?: DataOciOsmanagementManagedInstancesFilter[];
}
export class DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSources extends ComplexComputedList {

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroups extends ComplexComputedList {

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }
}
export class DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSource extends ComplexComputedList {

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataOciOsmanagementManagedInstancesManagedInstances extends ComplexComputedList {

  // child_software_sources - computed: true, optional: false, required: true
  public get childSoftwareSources() {
    return 'not implemented' as any;
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_reboot_required - computed: true, optional: false, required: true
  public get isRebootRequired() {
    return this.getBooleanAttribute('is_reboot_required');
  }

  // last_boot - computed: true, optional: false, required: true
  public get lastBoot() {
    return this.getStringAttribute('last_boot');
  }

  // last_checkin - computed: true, optional: false, required: true
  public get lastCheckin() {
    return this.getStringAttribute('last_checkin');
  }

  // managed_instance_groups - computed: true, optional: false, required: true
  public get managedInstanceGroups() {
    return 'not implemented' as any;
  }

  // os_family - computed: true, optional: false, required: true
  public get osFamily() {
    return this.getStringAttribute('os_family');
  }

  // os_kernel_version - computed: true, optional: false, required: true
  public get osKernelVersion() {
    return this.getStringAttribute('os_kernel_version');
  }

  // os_name - computed: true, optional: false, required: true
  public get osName() {
    return this.getStringAttribute('os_name');
  }

  // os_version - computed: true, optional: false, required: true
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }

  // parent_software_source - computed: true, optional: false, required: true
  public get parentSoftwareSource() {
    return 'not implemented' as any;
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // updates_available - computed: true, optional: false, required: true
  public get updatesAvailable() {
    return this.getNumberAttribute('updates_available');
  }
}
export interface DataOciOsmanagementManagedInstancesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciOsmanagementManagedInstances extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciOsmanagementManagedInstancesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_osmanagement_managed_instances',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._osFamily = config.osFamily;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // managed_instances - computed: true, optional: false, required: true
  public managedInstances(index: string) {
    return new DataOciOsmanagementManagedInstancesManagedInstances(this, 'managed_instances', index);
  }

  // os_family - computed: false, optional: true, required: false
  private _osFamily?: string;
  public get osFamily() {
    return this._osFamily;
  }
  public set osFamily(value: string | undefined) {
    this._osFamily = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciOsmanagementManagedInstancesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciOsmanagementManagedInstancesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      display_name: this._displayName,
      os_family: this._osFamily,
      filter: this._filter,
    };
  }
}
