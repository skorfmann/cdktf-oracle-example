// https://www.terraform.io/docs/providers/oci/r/data_oci_osmanagement_managed_instance_groups.html
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
      "managed_instance_groups": {
        "type": [
          "list",
          [
            "object",
            {
              "compartment_id": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "description": "string",
              "display_name": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "managed_instance_count": "number",
              "managed_instances": [
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
              "state": "string"
            }
          ]
        ],
        "computed": true
      },
      "os_family": {
        "type": "string",
        "optional": true
      },
      "state": {
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

export interface DataOciOsmanagementManagedInstanceGroupsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly displayName?: string;
  readonly osFamily?: string;
  readonly state?: string;
  /** filter block */
  readonly filter?: DataOciOsmanagementManagedInstanceGroupsFilter[];
}
export class DataOciOsmanagementManagedInstanceGroupsManagedInstanceGroupsManagedInstances extends ComplexComputedList {

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }
}
export class DataOciOsmanagementManagedInstanceGroupsManagedInstanceGroups extends ComplexComputedList {

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // managed_instance_count - computed: true, optional: false, required: true
  public get managedInstanceCount() {
    return this.getNumberAttribute('managed_instance_count');
  }

  // managed_instances - computed: true, optional: false, required: true
  public get managedInstances() {
    return 'not implemented' as any;
  }

  // os_family - computed: true, optional: false, required: true
  public get osFamily() {
    return this.getStringAttribute('os_family');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataOciOsmanagementManagedInstanceGroupsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciOsmanagementManagedInstanceGroups extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciOsmanagementManagedInstanceGroupsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_osmanagement_managed_instance_groups',
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
    this._state = config.state;
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

  // managed_instance_groups - computed: true, optional: false, required: true
  public managedInstanceGroups(index: string) {
    return new DataOciOsmanagementManagedInstanceGroupsManagedInstanceGroups(this, 'managed_instance_groups', index);
  }

  // os_family - computed: false, optional: true, required: false
  private _osFamily?: string;
  public get osFamily() {
    return this._osFamily;
  }
  public set osFamily(value: string | undefined) {
    this._osFamily = value;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciOsmanagementManagedInstanceGroupsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciOsmanagementManagedInstanceGroupsFilter[] | undefined) {
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
      state: this._state,
      filter: this._filter,
    };
  }
}
