// https://www.terraform.io/docs/providers/oci/r/data_oci_osmanagement_managed_instance.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "child_software_sources": {
        "type": [
          "list",
          [
            "object",
            {
              "id": "string",
              "name": "string"
            }
          ]
        ],
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "description": {
        "type": "string",
        "computed": true
      },
      "display_name": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "is_reboot_required": {
        "type": "bool",
        "computed": true
      },
      "last_boot": {
        "type": "string",
        "computed": true
      },
      "last_checkin": {
        "type": "string",
        "computed": true
      },
      "managed_instance_groups": {
        "type": [
          "list",
          [
            "object",
            {
              "display_name": "string",
              "id": "string"
            }
          ]
        ],
        "computed": true
      },
      "managed_instance_id": {
        "type": "string",
        "required": true
      },
      "os_family": {
        "type": "string",
        "computed": true
      },
      "os_kernel_version": {
        "type": "string",
        "computed": true
      },
      "os_name": {
        "type": "string",
        "computed": true
      },
      "os_version": {
        "type": "string",
        "computed": true
      },
      "parent_software_source": {
        "type": [
          "list",
          [
            "object",
            {
              "id": "string",
              "name": "string"
            }
          ]
        ],
        "computed": true
      },
      "status": {
        "type": "string",
        "computed": true
      },
      "updates_available": {
        "type": "number",
        "computed": true
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

export interface DataOciOsmanagementManagedInstanceConfig extends TerraformMetaArguments {
  readonly managedInstanceId: string;
}
export class DataOciOsmanagementManagedInstanceChildSoftwareSources extends ComplexComputedList {

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataOciOsmanagementManagedInstanceManagedInstanceGroups extends ComplexComputedList {

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }
}
export class DataOciOsmanagementManagedInstanceParentSoftwareSource extends ComplexComputedList {

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}

// Resource

export class DataOciOsmanagementManagedInstance extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciOsmanagementManagedInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_osmanagement_managed_instance',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._managedInstanceId = config.managedInstanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // child_software_sources - computed: true, optional: false, required: true
  public childSoftwareSources(index: string) {
    return new DataOciOsmanagementManagedInstanceChildSoftwareSources(this, 'child_software_sources', index);
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

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
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
  public managedInstanceGroups(index: string) {
    return new DataOciOsmanagementManagedInstanceManagedInstanceGroups(this, 'managed_instance_groups', index);
  }

  // managed_instance_id - computed: false, optional: false, required: true
  private _managedInstanceId: string;
  public get managedInstanceId() {
    return this._managedInstanceId;
  }
  public set managedInstanceId(value: string) {
    this._managedInstanceId = value;
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
  public parentSoftwareSource(index: string) {
    return new DataOciOsmanagementManagedInstanceParentSoftwareSource(this, 'parent_software_source', index);
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // updates_available - computed: true, optional: false, required: true
  public get updatesAvailable() {
    return this.getNumberAttribute('updates_available');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      managed_instance_id: this._managedInstanceId,
    };
  }
}
